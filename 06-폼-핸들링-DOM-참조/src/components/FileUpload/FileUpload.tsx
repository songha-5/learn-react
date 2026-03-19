import NickNameField from './parts/NickNameField'
import FileUploadField from './parts/FileUploadField'
import SaveButton from './parts/SaveButton'
import FileUploadResult from './parts/FileUploadResult'
import S from './FileUpload.module.css'
import { useRef, useState } from 'react'

const { VITE_IMGBB_URL: apiUrl, VITE_IMGBB_API_KEY: apiKey } = import.meta.env
const API_ENDPOINT = `${apiUrl}?key=${apiKey}`
console.log(API_ENDPOINT)

// --------------------------------------------------------------------------------------
// 실습 가이드
// --------------------------------------------------------------------------------------
// 1. `파일 참조(Ref)` 생성
//    - `useRef` 훅을 사용하여 파일 인풋 요소에 접근할 참조 객체를 생성합니다.
//
// 2. 상태(State) 생성
//    - `previewUrl`: 선택한 이미지의 미리보기 주소 (string)
//    - `isUploading`: 업로드 진행 상태 (boolean)
//    - `uploadedData`: 업로드 완료 후 서버로부터 받은 데이터 (객체 또는 null)
//    - `isCopied`: 클립보드 복사 완료 여부 (boolean)
//
// 3. 파일 변경 핸들링 로직 작성
//    - 파일 인풋에서 첫 번째 파일 정보를 읽어옵니다.
//    - 기존에 생성된 `previewUrl`이 있다면 `URL.revokeObjectURL()`로 메모리 해제를 수행합니다.
//    - 새로운 파일이 있다면 `URL.createObjectURL(file)`로 미리보기 주소를 생성하고 상태를 업데이트합니다.
//    - 새로운 파일 선택 시 기존 업로드 결과(`uploadedData`) 및 복사(`isCopied`) 상태를 초기화합니다.
//
// 4. 미리보기 및 파일 참조 초기화 핸들러 로직 작성
//    - 파일 참조 객체의 값을 빈 문자열로 설정하여 인풋의 선택 상태를 물리적으로 제거합니다.
//    - `previewUrl` 상태를 빈 값으로 변경하여 화면에서 미리보기를 지웁니다.
//    - 관련 상태들(`uploadedData`, `isCopied`)을 초기화합니다.
//
// 5. 파일 업로드 핸들러 로직 작성
//    - 폼의 기본 제출 작동을 방지합니다.
//    - 중복 업로드 방지를 위해 `isUploading` 상태를 체크합니다.
//    - `fileRef`를 통해 실제 파일 존재 여부와 크기를 검증합니다.
//    - `FormData` 객체를 생성하고 파일을 첨부하여 지정된 API URL로 `POST` 요청을 보냅니다.
//    - 업로드 성공 시 서버 응답 데이터를 `uploadedData`에 저장하고, 인풋과 미리보기를 초기화합니다.
//
// 6. 클립보드 복사 핸들러 로직 작성
//    - `navigator.clipboard.writeText()`를 사용하여 전달받은 텍스트를 복사합니다.
//    - 복사 성공 시 `isCopied` 상태를 변경하고, 일정 시간(예: 2초) 후 다시 원래대로 되돌립니다.
// --------------------------------------------------------------------------------------

export default function FileUpload() {
  
  // fileUploadField 내부의 <input type="file"/>요소를 참조하기 위한 Ref 객체 생성
  const fileRef = useRef<HTMLInputElement>(null) // { current: null } -> { current: HTMLInputElement }

  // [상태]
  const [previewUrl, setPreviewUrl] = useState('')



  
  // [이벤트 핸들러]
  // 파일 업로드
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const file = files?.item(0)

    if(!file) return // 올릴 파일이 없다면 함수 종료

    // URL.revokeObjectURL (URL 해제, 정리)
    if(previewUrl) URL.revokeObjectURL(previewUrl) // 메모리정리
    

    // URL.createObjectURL (URL 생성)
    const createPreviewUrl = URL.createObjectURL(file)
    setPreviewUrl(createPreviewUrl)
  }

  // 미리보기 이미지 및 파일 삭제
  const handleDeleteFile = () => {
    // 미리보기 이미지 초기화
    if(previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl('')
    }
    // 파일의 소스 삭제
    const file = fileRef.current
    if(file) file.value = ''
  }


  // 회원가입 폼 (제어 방식 : 실시간 검증 및 안내, 잦은 리렌더링 이슈)
  // 파일 업로드 폼 (웹표준방식 : 리액트가 제어 불가능 (브라우저 보안 문제 때문))
  const handleUpload = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formElement = e.currentTarget
    // 폼 데이터 생성
    const formData = new FormData(formElement) //폼 데이터 생성
    console.log(Object.fromEntries(formData)) // 사용자 입력 폼 데이터 확인
  }

  return (
    <section className={S.card}>
      <h2 className={S.title}>프로필 설정</h2>
      <form onSubmit={handleUpload} className={S.form}>
        <NickNameField />
        <FileUploadField
          onFileChange={handleFileChange}
          ref={fileRef}
          previewUrl={previewUrl}
          onDeleteFile={handleDeleteFile}
        />
        <SaveButton />
      </form>
      {/* <FileUploadResult /> */}
    </section>
  )
}