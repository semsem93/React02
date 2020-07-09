# React Side Project 02
Follow the [React Getting Started](https://ko.reactjs.org/tutorial/tutorial.html) Guide for detailed instructions on setting up your local machine for development.

## How to run
* Clone repository and install dependencies
```
git clone Project
```
* Run Application
```
npm install
cd cline
npm install
cd ..
npm run dev
```

## Features
* server
> 1. mongoDB 사용
> 2. jsonwebtoken 라이브러리 사용 token 생성 및 쿠기 저장 기능 추가
> 3. bcrypt 라이브러리 사용 password 암호화
------------------
* hello word!!\
```http : // localhost : 5000 /``` 
* 가입 관련\
```http://localhost:5000/api/users/register``` 
\
json 형식\
``
{ 
"name":"test", 
"email":"test@gamil.com", 
"password":"test" 
}
``
* 로그인\
```http://localhost:5000/api/users/login```
\
json 형식\
``
{
    "email":"test@gmail.com",
    "password":"test"
}
``
* 로그아웃\
```http://localhost:5000/api/users/logout```
---------------------
* Client
> 1. randing Page : 시작 페이지, 영화 인기순으로 정렬
> 2. Login Page : 로그인할 수 있는 화면
> 3. Register Page : 회원 가입할 수 있는 화면
> 4. Favorite Page : (로그인시 사용 가능) 사용자가 Favorite 누른 목록만 정렬
> 5. Movie Detail Page: Movie Info 제공
> 5. redux 기능 사용
> 6. Auth 기능 사용
> 7. The Movie API 사용
> 8. Ant Design 사용해 UI 
--------------
* randing Page\
```http://localhost:3000/```
* login Page\
```http://loginhost:3000/login/```
* register Page\
```http://loginhost:3000/register```
* Favorite Page\
```http://loginhost:3000/favorite```
* Movie detail Page\
```http://loginhost:3000/movie/(영화번호)```
