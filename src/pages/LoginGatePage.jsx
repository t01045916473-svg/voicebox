import AuthGateCard from '../components/AuthGateCard.jsx'

export default function LoginGatePage() {
  return (
    <AuthGateCard
      title="로그인"
      description="구글 계정으로 간편하게 로그인하세요."
      switchText="아직 계정이 없으신가요?"
      switchLinkText="회원가입"
      switchTo="/signup"
    />
  )
}
