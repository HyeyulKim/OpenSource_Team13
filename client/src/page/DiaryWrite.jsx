import React from "react";
import { content } from "../asset/Content";
import Header from "../component/Header";
import Text from "../component/Text";
import Date from "../util/Date";
import styled from "styled-components";
import { color } from "../asset/palette";
import Button from "../component/Button";
import ApiRequest from "../util/ApiRequest";
import { useHistory } from "react-router";

const Grid = styled.div`
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 340px;
  padding: 19px 12px;
  background-color: ${color.LIGHT_BLUE};
  border: none;
  border-radius: 7px;
  outline: none;
  resize: none;
  line-height: 20px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 52px;
  width: 100%;
  padding: 0 12px;
`;

const HowsTodayText = styled(Text)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export default function DiaryWrite() {
  const [diaryContent, setDiaryContent] = React.useState("");
  const history = useHistory();

  return (
    <>
      <Header leftIconType="NOTHING" rightIconType="NOTHING">
        <Text size={12}>{Date.currentYYYYMMDD()}</Text>
      </Header>
      <Grid>
        <HowsTodayText size={18} bold={true}>
          {content.HOWS_TODAY}
        </HowsTodayText>
        <TextArea
          placeholder={content.DIARY_PLACEHOLDER}
          onChange={(e) => {
            setDiaryContent(e.target.value);
          }}
        />
        <ButtonWrapper
          onClick={() => {
            if (window.confirm("일기를 작성하시겠습니까?")) {
              ApiRequest.server
                .post("/diary", {
                  title: "Title",
                  content: diaryContent,
                })
                .then((data) => {
                  history.push({ pathname: "/", state: { isPost: true } });
                });
            }
          }}
        >
          <Button>{content.SAVE_AND_RECOMMEND_SONG}</Button>
        </ButtonWrapper>
      </Grid>
    </>
  );
}
