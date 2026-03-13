# TCP vs UDP

**질문**: TCP와 UDP의 차이점은 무엇인가요?

**답변**:

- TCP (Transmission Control Protocol)
  - 연결형 프로토콜 (3-way handshake)
  - 신뢰성 있는 데이터 전송 보장 (재전송, ACK)
  - 흐름 제어, 혼잡 제어
  - 순서 보장
  - 패킷 손실이나 오류가 발생해도 복구함
  - 예: 웹 브라우징(HTTP), 이메일(SMTP)

- UDP (User Datagram Protocol)
  - 비연결형 프로토콜
  - 헤더가 간단하여 오버헤드가 적음
  - 신뢰성/순서/재전송 미지원
  - 지연 시간이 짧아 실시간 통신에 적합
  - 예: 스트리밍, 온라인 게임, VoIP

> **면접 팁**: 각 프로토콜을 선택하는 상황을 사례와 함께 설명하면 좋습니다.