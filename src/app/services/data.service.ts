import { Injectable } from '@angular/core';

export interface ITitleCard {
  title: string;
  urlToImage: string;
}

export interface ICard {
  word: string;
  translate: string;
  image: string;
  audioSrc: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
private linksData: Array<string> = [
  'Action Set(A)',
  'Action Set(B)',
  'Action Set(C)',
  'Adjective',
  'Animal Set(A)',
  'Animal Set(B)',
  'Clothes',
  'Emotion',
];

  private titleData: Array<ITitleCard> = [
    {
      title: 'Action Set(A)',
      urlToImage: '../../assets/images/dance.jpg',
    },
    {
      title: 'Action Set(B)',
      urlToImage: '../../assets/images/swim.jpg',
    },
    {
      title: 'Action Set(C)',
      urlToImage: '../../assets/images/drive.jpg',
    },
    {
      title: 'Adjective',
      urlToImage: '../../assets/images/small.jpg',
    },
    {
      title: 'Animal Set(A)',
      urlToImage: '../../assets/images/cat.jpg',
    },
    {
      title: 'Animal Set(B)',
      urlToImage: '../../assets/images/bird.jpg',
    },
    {
      title: 'Clothes',
      urlToImage: '../../assets/images/dress.jpg',
    },
    {
      title: 'Emotion',
      urlToImage: '../../assets/images/happy.jpg',
    },
  ];

  private data: object = {
    'Action Set(A)': [
      {
        word: 'cry',
        translate: 'плакать',
        image: '../../assets/images/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translate: 'танцевать',
        image: '../../assets/images/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translate: 'плавать',
        image: '../../assets/images/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translate: 'рисовать',
        image: '../../assets/images/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translate: 'рыбачить',
        image: '../../assets/images/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translate: 'летать',
        image: '../../assets/images/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translate: 'обнимать',
        image: '../../assets/images/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translate: 'прыгать',
        image: '../../assets/images/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],
    'Action Set(B)': [
      {
        word: 'open',
        translate: 'открывать',
        image: '../../assets/images/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translate: 'играть',
        image: '../../assets/images/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translate: 'указывать',
        image: '../../assets/images/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translate: 'ездить',
        image: '../../assets/images/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translate: 'бегать',
        image: '../../assets/images/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translate: 'петь',
        image: '../../assets/images/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translate: 'пропускать, прыгать',
        image: '../../assets/images/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translate: 'плавать',
        image: '../../assets/images/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],
    'Action Set(C)': [
      {
        word: 'argue',
        translate: 'спорить',
        image: '../../assets/images/argue.jpg',
        audioSrc: 'audio/argue.mp3',
      },
      {
        word: 'build',
        translate: 'строить',
        image: '../../assets/images/build.jpg',
        audioSrc: 'audio/build.mp3',
      },
      {
        word: 'carry',
        translate: 'нести',
        image: '../../assets/images/carry.jpg',
        audioSrc: 'audio/carry.mp3',
      },
      {
        word: 'catch',
        translate: 'ловить',
        image: '../../assets/images/catch.jpg',
        audioSrc: 'audio/catch.mp3',
      },
      {
        word: 'drive',
        translate: 'ездить',
        image: '../../assets/images/drive.jpg',
        audioSrc: 'audio/drive.mp3',
      },
      {
        word: 'drop',
        translate: 'падать',
        image: '../../assets/images/drop.jpg',
        audioSrc: 'audio/drop.mp3',
      },
      {
        word: 'pull',
        translate: 'тянуть',
        image: '../../assets/images/pull.jpg',
        audioSrc: 'audio/pull.mp3',
      },
      {
        word: 'push',
        translate: 'толкать',
        image: '../../assets/images/push.jpg',
        audioSrc: 'audio/push.mp3',
      },
    ],
    Adjective: [
      {
        word: 'big',
        translate: 'большой',
        image: '../../assets/images/big.jpg',
        audioSrc: 'audio/big.mp3',
      },
      {
        word: 'small',
        translate: 'маленький',
        image: '../../assets/images/small.jpg',
        audioSrc: 'audio/small.mp3',
      },
      {
        word: 'fast',
        translate: 'быстрый',
        image: '../../assets/images/fast.jpg',
        audioSrc: 'audio/fast.mp3',
      },
      {
        word: 'slow',
        translate: 'медленный',
        image: '../../assets/images/slow.jpg',
        audioSrc: 'audio/slow.mp3',
      },
      {
        word: 'friendly',
        translate: 'дружелюбный',
        image: '../../assets/images/friendly.jpg',
        audioSrc: 'audio/friendly.mp3',
      },
      {
        word: 'unfriendly',
        translate: 'враждебный',
        image: '../../assets/images/unfriendly.jpg',
        audioSrc: 'audio/unfriendly.mp3',
      },
      {
        word: 'young',
        translate: 'молодой',
        image: '../../assets/images/young.jpg',
        audioSrc: 'audio/young.mp3',
      },
      {
        word: 'old',
        translate: 'старый',
        image: '../../assets/images/old.jpg',
        audioSrc: 'audio/old.mp3',
      },
    ],
    'Animal Set(A)': [
      {
        word: 'cat',
        translate: 'кот',
        image: '../../assets/images/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translate: 'цыпленок',
        image: '../../assets/images/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translate: 'курица',
        image: '../../assets/images/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translate: 'собака',
        image: '../../assets/images/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translate: 'лошадь',
        image: '../../assets/images/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translate: 'свинья',
        image: '../../assets/images/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translate: 'кролик',
        image: '../../assets/images/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translate: 'овца',
        image: '../../assets/images/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],
    'Animal Set(B)': [
      {
        word: 'bird',
        translate: 'птица',
        image: '../../assets/images/bird.jpg',
        audioSrc: 'audio/bird.mp3',
      },
      {
        word: 'fish',
        translate: 'рыба',
        image: '../../assets/images/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        id: 'section6',
        word: 'frog',
        translate: 'лягушка',
        image: '../../assets/images/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translate: 'жираф',
        image: '../../assets/images/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translate: 'лев',
        image: '../../assets/images/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
      {
        word: 'mouse',
        translate: 'мышь',
        image: '../../assets/images/mouse.jpg',
        audioSrc: 'audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translate: 'черепаха',
        image: '../../assets/images/turtle.jpg',
        audioSrc: 'audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translate: 'дельфин',
        image: '../../assets/images/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3',
      },
    ],
    Clothes: [
      {
        word: 'skirt',
        translate: 'юбка',
        image: '../../assets/images/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translate: 'брюки',
        image: '../../assets/images/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translate: 'блузка',
        image: '../../assets/images/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translate: 'платье',
        image: '../../assets/images/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translate: 'ботинок',
        image: '../../assets/images/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translate: 'рубашка',
        image: '../../assets/images/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translate: 'пальто',
        image: '../../assets/images/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translate: 'туфли',
        image: '../../assets/images/shoes.jpg',
        audioSrc: 'audio/shoes.mp3',
      },
    ],
    Emotion: [
      {
        word: 'sad',
        translate: 'грустный',
        image: '../../assets/images/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translate: 'сердитый',
        image: '../../assets/images/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translate: 'счастливый',
        image: '../../assets/images/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translate: 'уставший',
        image: '../../assets/images/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translate: 'удивленный',
        image: '../../assets/images/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translate: 'напуганный',
        image: '../../assets/images/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translate: 'улыбка',
        image: '../../assets/images/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translate: 'смех',
        image: '../../assets/images/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],
  };

  getLinks(): Array<string> {
    return this.linksData;
  }

  getData(key: string): Array<ICard> {
    return this.data[key];
  }

  getTitleData(): Array<ITitleCard> {
    return this.titleData;
  }
}
