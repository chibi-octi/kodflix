import React from 'react';
import film1 from '../images/film/film-spirited.jpg';
import film2 from '../images/film/film-arrietty.jpg';
import film3 from '../images/film/film-nausicaa.jpg';
import film4 from '../images/film/film-mary.jpg';
import film5 from '../images/film/film-ponyo.jpg';
import film6 from '../images/film/film-whisper.jpg';

export default function getGallery() {
  return [
    {
      id: 'film1', 
      name: 'Spirited Away', 
      image: film1, rating: '3 stars',
      synopsis: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
      video: <iframe width="99.99%" height="315" src="https://www.youtube.com/embed/ByXuk9QqQkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },

    { id: 'film2', 
      name: 'Arrietty', 
      image: film2, 
      rating: '3 stars', 
      synopsis: "Arrietty, a tiny teenager, lives with her parents in the recesses of a suburban home, unbeknown to the homeowner and housekeeper. Like others of her kind, Arrietty remains hidden from her human hosts, but occasionally ventures forth from beneath the floorboards to borrow sugar cubes and other supplies. A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family."
    },

    { 
      id: 'film3', 
      name: 'Nausicaa of the Valley of the Wind', 
      image: film3, 
      rating: '3 stars', 
      synopsis: `Far in the future, after an apocalyptic conflict has devastated much of the world's ecosystem, the few surviving humans live in scattered semi-hospitable environments within what has become a "toxic jungle." Young Nausicaä lives in the arid Valley of the Wind and can communicate with the massive insects that populate the dangerous jungle. Under the guidance of the pensive veteran warrior, Lord Yupa, Nausicaä works to bring peace back to the ravaged planet.`
    },

    { id: 'film4', 
      name: 'Mary and the Witch\'s Flower', 
      image: film4, 
      rating: '3 stars', 
      synopsis: "Young Mary follows a mysterious cat into the nearby forest and discovers an old broomstick and the strange Fly-by-Night flower, a rare plant that blossoms once every seven years. Together, the flower and the broomstick whisk Mary above the clouds, and far away to Endor College -- a school of magic run by headmistress Madam Mumblechook and the brilliant Doctor Dee. But there are terrible things happening at the school, and when Mary tells a lie, she must risk her life to try and set things right."
    },

    { 
      id: 'film5', 
      name: 'Ponyo', 
      image: film5, 
      rating: '3 stars',
      synopsis: "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village." 
    },

    { 
      id: 'film6', 
      name: 'Whisper of the Heart', 
      image: film6, 
      rating: '3 stars', 
      synopsis: 'Based on the manga with the same title, this animated film follows Shizuku, an inquisitive young girl and a voracious reader, who longs to be a writer when she grows up. One day she notices that all of her library books have previously been taken out by one Seiji Amasawa. Amid chasing after a large cat, befriending an eccentric antiques dealer and writing her first novel, Shizuku aims to find this mysterious boy who may well be her soul mate.'
    },
  ]
}
