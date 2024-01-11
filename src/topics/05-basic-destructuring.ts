interface AudioPLayer{
    audioVolumen:number;
    songDuration:number;
    song:string;
    details: Details;
}

 interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPLayer={
    audioVolumen: 90,
    songDuration: 30,
    song: "Hey Jude",
    details: {
        author: "The Beatles",
        year: 1968
    }
}
const song = 'New Song';

const {song:anotherSong, songDuration:duration, details}= audioPlayer;
const {author}= details;
//console.log('Song; ',anotherSong);
//console.log('Duration; ',duration);
//console.log('Author; ',author);

const [,, trunks='Not found' ]:string[]=['Goku','Vegeta'];

console.log('Personaje 3: ', trunks );

export {}