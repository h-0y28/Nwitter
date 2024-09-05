import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/cordova';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { Form, Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { Error, Input, Switcher, Title, Wrapper } from '../components/auth-components';

export default function CreateAccount() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // React.ChangeEvent<HTMLInputElement> : React에서 폼 요소의 onChange 이벤트를 처리할 때 사용되는 이벤트 객체의 타입을 정의하는 TypeScript 타입
  // <input> 요소에서 발생하는 change 이벤트를 처리할 때 사용 됨

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (isLoading || name === '' || email === '' || password === '') return;
    try {
      setIsLoading(true);
      // 계정 생성
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(credentials.user);

      // 사용자 프로필 업데이트
      await updateProfile(credentials.user, { displayName: name });

      // home으로 이동
      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
    console.log(name, email, password);
  };
  return (
    <Wrapper>
      <Title>Join 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required />
        <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
        <Input onChange={onChange} value={password} name="password" placeholder="Password" type="password" required />
        <Input type="submit" value={isLoading ? 'Loading...' : 'Create Account'} />
      </Form>
      {error !== '' ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account? <Link to="/login">Login &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
