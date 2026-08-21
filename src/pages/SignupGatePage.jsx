import AuthGateCard from '../components/AuthGateCard.jsx'

export default function SignupGatePage() {
  return (
    <AuthGateCard
      title="회원가입"
      description="구글 계정으로 간편하게 회원가입하세요."
      switchText="이미 계정이 있으신가요?"
      switchLinkText="로그인"
      switchTo="/login"
    />
  )
}
