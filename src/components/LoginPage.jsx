import { useState } from 'react';
import '../styles/LoginPage.css';
import PrettyButton from './PrettyButton';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <div className="image-overlay"></div>
        <div className="welcome-text">
          <h2>Welcome Back!</h2>
          <p>최고의 서비스로 여러분을 모시겠습니다</p>
        </div>
      </div>
      <div className="login-form-section">
        <div className="login-box">
          <h1>환영합니다!</h1>
          <p className="login-subtitle">계정에 로그인하고 다양한 서비스를 이용해보세요</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일 주소"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호"
                required
              />
            </div>

            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" /> 자동 로그인
              </label>
              <a href="#" className="forgot-password">비밀번호를 잊으셨나요?</a>
            </div>

            <PrettyButton onClick={handleSubmit}>
              로그인하기
            </PrettyButton>
          </form>

          <p className="signup-link">
            아직 계정이 없으신가요? <a href="#">회원가입</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 