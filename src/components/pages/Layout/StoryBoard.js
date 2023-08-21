import classes from "../../../styles/pages/layout/storyBoard.module.css";
const StoryBoard = () => {
  return (
    <div className={classes.storyBoardWrap}>
      <div className={classes.createBoard}>
        <div className={classes.plus}>
          <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"
               className="x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj xxk0z11 xvy4d1p">
            <path d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"></path>
          </svg>
        </div>
        <div className={classes.createMessage}>
          <h2>게시글 만들기</h2>
          <p>사진을 공유하거나 글을 남겨보세요.</p>
        </div>
      </div>
      <div className={classes.createBoard2}>

        <div className={classes.titleWrap}>
          <h2 className={classes.suggestion}>추천 게시물</h2>
        </div>

        <div className={classes.flexStyle}>
          <div>
            <img className={classes.img} src='https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/testImg.png?alt=media&token=10879be7-cee5-4e1a-899a-604120643f9b' />
          </div>
          <div>
            <h2>대한민국 경찰청</h2>
            <p>8월 14일 오후 2:43</p>
          </div>
        </div>

        <div className={classes.description}>
          <p>“알고보니 사기꾼이었다…” 8억시계 찼던 추성훈 통장잔고 확인해보니 20만원, 충격적인 고백에 모두가 경악한 진짜 이유..</p>
        </div>

        <div className={classes.videoArea}></div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default StoryBoard