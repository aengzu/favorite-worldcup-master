import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "인형",
    src: require("../../img/bear_doll.jpg")
  },
  {
    name: "상품권",
    src: require("../../img/price.png")
  },
  {
    name: "쥬얼리(반지/목걸이/팔찌)",
    src: require("../../img/juwerly.jpg")
  },
  {
    name: "노트북파우치",
    src: require("../../img/notebook.jpg")
  },
  {
    name: "러쉬 바디 제품",
    src: require("../../img/lush.jpg")
  },
  {
    name: "자취템",
    src: require("../../img/air_frier.jpg")
  },
  {
    name: "신발",
    src: require("../../img/shoes.jpg")
  },
  {
    name: "책",
    src: require("../../img/book.jpg")
  },
  {
    name: "모자",
    src: require("../../img/cap.jpg")
  },
  {
    name: "기프티콘(ex) 커피, 치킨, 아이스크림)",
    src: require("../../img/giftcon.jpg")
  },
  {
    name: "꽃",
    src: require("../../img/flower.jpg")
  },
  {
    name: "필름카메라",
    src: require("../../img/film_camer.jpg")
  },
  {
    name: "영양제/비타민",
    src: require("../../img/vitamin.jpg")
  },
  {
    name: "지갑",
    src: require("../../img/wallet.jpg")
  },
  {
    name: "텀블러",
    src: require("../../img/tumbler.jpg")
  },
  {
    name: "더치커피 세트",
    src: require("../../img/dutch_coffee.jpg")
  },
  {
    name: "화장품",
    src: require("../../img/makeup.jpg")
  },
  {
    name: "초콜릿, 사탕 같은 간식",
    src: require("../../img/chocolate.jpg")
  },
  {
    name: "디퓨저",
    src: require("../../img/difuser.jpg")
  },
  {
    name: "옷",
    src: require("../../img/clothes.jpg")
  },
  {
    name: "안경",
    src: require("../../img/glasses.jpg")
  },
  {
    name: "핸드크림",
    src: require("../../img/handcream.jpg")
  },
  {
    name: "무드등",
    src: require("../../img/mode_light.jpg")
  }
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">Favorite Worldcup</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
