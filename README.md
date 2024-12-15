# 날씨알려줭(WeatherProject)
## 요약
>날씨 정보를 실시간으로 확인하고, 간단한 검색 기능을 제공하는 웹 애플리케이션입니다. 사용자가 입력한 검색어를 기반으로 웹 검색 결과를 제공하며, 현재 날씨를 기반으로 비디오 배경이 동적으로 변경됩니다.

### 제작 이유
해당 프로젝트는 주로 실내에서 작업하는 분들이
점심시간이나 시간감각을 잃어 버렸을때 검색할때 마다 
날씨를 알 수 있도록 도와주는 페이지입니다.

## 기능 소개
- **날씨 정보 제공**:
    - 공공데이터 API를 통해 실시간 날씨 정보를 가져와 화면에 표시.
    - 날씨 상태(맑음, 비, 눈 등)에 따라 배경 비디오를 동적으로 변경.
- **검색** :
    - 사용자가 입력한 검색어를 카카오 API를 통해 검색하고, 결과를 페이지에 표시.
- **현재 날짜 및 시간 표시**:
    - 페이지 로드 시 현재 날짜와 시간을 표시.
**API 활용**:
- 공공데이터 포털 API (날씨 데이터)
- 카카오 API (웹 검색 데이터)

  

## 기술 스택 (Skill)
- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- OpenAPI
- ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white) ,AJAX

## 문제 해결

- 공공데이터 API의 복잡한 응답 구조를 이해하는 데 어려움이 있었습니다. 특히, 시간대별 날씨 데이터를 가져오고 이를 현재 시간에 맞게 필터링하는 로직 구현이 까다로웠습니다.

**해결 방법**

- API 응답 데이터를 반복적으로 요청하고 분석하여 구조를 파악한 뒤, JavaScript의`Date`객체와`switch`문을 활용해 현재 시간에 해당하는 데이터를 추출할 수 있도록 로직을 작성하였습니다. 이를 통해 원하는 시간대의 데이터를 안정적으로 가져올 수 있었습니다.

## 어려웠던 점
- 공공데이터와 카카오 API를 연동하면서 API 문서를 분석하고 요청 및 응답 구조를 이해하는 능력이 크게 향상되었습니다.
- 날씨 정보에 따른 동적인 UI 변화를 구현하며 JavaScript와 CSS를 활용한 데이터와 UI 간의 연동 경험을 쌓을 수 있었습니다.
- **Open API 활용**: 처음 다뤄보는 내용이 많아 API 활용에 지나치게 의존하게 되었음을 느꼈습니다. 앞으로는 API 사용뿐 아니라 다양한 기능 구현에도 균형 있게 집중해야겠다고 생각했습니다.
- **API 보안 관리**: API 키 관리에서 보안의 중요성을 느꼈으며, 환경 변수를 활용하여 보안을 강화해야 한다는 점을 배웠습니다.

## 프로젝트 이미지
| ![맑음](https://github.com/user-attachments/assets/be5a11eb-931f-492a-b8f0-9e886afa981b) | ![흐림](https://github.com/user-attachments/assets/ae145efc-b82c-492f-ac32-927fe0e06c4f) |
|------------------------------------------|------------------------------------------|
| ![비](https://github.com/user-attachments/assets/7f37ec99-8f41-4b75-9f68-a359ab3ff8de)   | ![눈](https://github.com/user-attachments/assets/319f076b-0835-45eb-be15-57198a6708a5)   |
