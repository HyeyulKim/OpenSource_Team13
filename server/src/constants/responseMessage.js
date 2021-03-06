const responseMessage = {
  NULL_VALUE: "필요한 값이 없습니다.",
  OUT_OF_VALUE: "파라미터 값이 잘못 되었습니다.",
  BODY_VALUE_ERROR: "Body 타입이 잘못 되었습니다.",
  INTERNAL_SERVER_ERROR: "서버 내부 오류",
  DUPLICATE_VALUE_ERROR: "중복된 파라미터 값",
  SIGN_UP_SUCCESS: "회원가입 성공",
  SIGN_IN_SUCCESS: "로그인 성공",
  POSSIBLE_ID: "사용 가능한 ID입니다.",
  DUPLICATE_ID: "사용 불가능한 ID입니다.",
  MISS_MATCH_USER_INFO: "ID 또는 비밀번호가 일치하지 않습니다",
  OK: "OK",

  DB_ERROR: "데이터베이스 에러",

  EMPTY_TOKEN: "헤더에 토큰이 없음",
  EXPIRED_TOKEN: "유효기간이 지난 토큰",
  INVALID_TOKEN: "잘못된 토큰",

  X_UNAUTHORIZED: (x) => `유저의 타입 ${x}`,
  X_CREATE_SUCCESS: (x) => `${x} 작성 성공`,
  X_CREATE_FAIL: (x) => `${x} 작성 실패`,
  X_READ_ALL_SUCCESS: (x) => `${x} 전체 조회 성공`,
  X_READ_ALL_FAIL: (x) => `${x} 전체 조회 실패`,
  X_READ_SUCCESS: (x) => `${x} 조회 성공`,
  X_READ_FAIL: (x) => `${x} 조회 실패`,
  X_UPDATE_SUCCESS: (x) => `${x} 수정 성공`,
  X_UPDATE_FAIL: (x) => `${x} 수정 실패`,
  X_DELETE_SUCCESS: (x) => `${x} 삭제 성공`,
  X_DELETE_FAIL: (x) => `${x} 삭제 실패`,
  NO_X: (x) => `존재하지 않는 ${x}`,
  ALREADY_X: (x) => `존재하는 ${x}`,
};

module.exports = responseMessage;
