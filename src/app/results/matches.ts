type Match = {
  recommendedVideo: string;
};


type UserMatches = {
  [userId: string]: {
    matches: {
      [matchKey: string]: Match;
    };
  };
};



// Temporary store for matches
export const matches : UserMatches = {'e7ead08d7ba7d700': {'matches': {'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=qyyRiamV3iA'}, '4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=Xvz0E5OEFV0'}, '8de227e71fe98ebe': {'recommendedVideo': 'https://www.youtube.com/watch?v=cMPxi4B0WJ8'}}}, '8de227e71fe98ebe': {'matches': {'53b2202ed82b5cd0': {'recommendedVideo': 'https://www.youtube.com/watch?v=62_RhIsdqhw'}, 'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=NaJCC64lk88'}, '4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=ekr2nIex040'}}}, '4df6d55647bf1c18': {'matches': {'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=nve__MNHbgw'}, '113434e943b24330': {'recommendedVideo': 'https://www.youtube.com/watch?v=ygHgzwpm4UI'}, '99556cd7542dc202': {'recommendedVideo': 'https://www.youtube.com/watch?v=OIYBEw6n6-w'}}}, 'e336311acbada796': {'matches': {'a5cf8e68c4a31fe4': {'recommendedVideo': 'https://www.youtube.com/watch?v=4iEkDBmD0As'}, 'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=vH56KtYo0jc'}, '113434e943b24330': {'recommendedVideo': 'https://www.youtube.com/watch?v=1UVQvX8NUjA'}}}, '53b2202ed82b5cd0': {'matches': {'8de227e71fe98ebe': {'recommendedVideo': 'https://www.youtube.com/watch?v=twPeQ3xHy3U'}, 'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=NaJCC64lk88'}, '4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=ekr2nIex040'}}}, '1f75ce0652fd8479': {'matches': {'99556cd7542dc202': {'recommendedVideo': 'https://www.youtube.com/watch?v=RqO3mP8KFx4'}, 'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=RSvrkve3FUU'}, 'e7d0562d8c2a4821': {'recommendedVideo': 'https://www.youtube.com/watch?v=i8cDwucTSbo'}}}, 'a5988a49391486f5': {'matches': {'4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=3AtDnEC4zak'}, 'e7ead08d7ba7d700': {'recommendedVideo': 'https://www.youtube.com/watch?v=znvky0Uq8qc'}, '8de227e71fe98ebe': {'recommendedVideo': 'https://www.youtube.com/watch?v=3lslsEhEcXU'}}}, 'e5ccf14dc6cbf765': {'matches': {'e7ead08d7ba7d700': {'recommendedVideo': 'https://www.youtube.com/watch?v=vTSXaIbo2VM'}, 'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=d3dP7yDCYZc'}, 'deb5cd8480bdc1b2': {'recommendedVideo': 'https://www.youtube.com/watch?v=RsWX6GYSTxc'}}}, '113434e943b24330': {'matches': {'e7c889e02edd98ac': {'recommendedVideo': 'https://www.youtube.com/watch?v=TnyVT2lB1t8'}, 'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=CVEnqLn48A8'}, '2e7e5b28218c2e04': {'recommendedVideo': 'https://www.youtube.com/watch?v=-CO3LpblrYk'}}}, 'e7c889e02edd98ac': {'matches': {'4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=hWyy5kSM0AQ'}, '113434e943b24330': {'recommendedVideo': 'https://www.youtube.com/watch?v=qr84kVJcs1c'}, 'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=ZRVivKBZ7i8'}}}, 'e573c590f3f13a53': {'matches': {'99556cd7542dc202': {'recommendedVideo': 'https://www.youtube.com/watch?v=LpHvArwqyVY'}, 'e7d0562d8c2a4821': {'recommendedVideo': 'https://www.youtube.com/watch?v=-Hxb6TQInzc'}, '4df6d55647bf1c18': {'recommendedVideo': 'https://www.youtube.com/watch?v=Yt1J-vQJGSc'}}}, 'a5cf8e68c4a31fe4': {'matches': {'e336311acbada796': {'recommendedVideo': 'https://www.youtube.com/watch?v=Fo3YFIN1Tjw'}, 'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=vH56KtYo0jc'}, '113434e943b24330': {'recommendedVideo': 'https://www.youtube.com/watch?v=1UVQvX8NUjA'}}}, 'fd8fd2e897d4e0b5': {'matches': {'4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=rO3gFl32JeE'}, 'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=dAwLMS8fgoA'}, '8de227e71fe98ebe': {'recommendedVideo': 'https://www.youtube.com/watch?v=1--pwdu-eJE'}}}, 'deb5cd8480bdc1b2': {'matches': {'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=Cq4HQD-BA5Y'}, '4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=IlB0Ko6gbKU'}, 'e7ead08d7ba7d700': {'recommendedVideo': 'https://www.youtube.com/watch?v=5iTZ_jZ63_Q'}}}, 'e7d0562d8c2a4821': {'matches': {'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=mh1L4Hp_CrY'}, '99556cd7542dc202': {'recommendedVideo': 'https://www.youtube.com/watch?v=wmiuhwRfIPI'}, '4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=uJHFcu1dwdo'}}}, '3cbda6a170bd9d80': {'matches': {'113434e943b24330': {'recommendedVideo': 'https://www.youtube.com/watch?v=HWI7hPIBoZ8'}, 'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=GMRuiIi_8bE'}, 'e7d0562d8c2a4821': {'recommendedVideo': 'https://www.youtube.com/watch?v=ZFWC4SiZBao'}}}, '4e4d0c6fcb702f02': {'matches': {'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=hrYob9Kgu8U'}, 'e7ead08d7ba7d700': {'recommendedVideo': 'https://www.youtube.com/watch?v=SR70AZXmyr8'}, '8de227e71fe98ebe': {'recommendedVideo': 'https://www.youtube.com/watch?v=_xeWJlExwp8'}}}, 'df608488c63a2a40': {'matches': {'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=WLFvlUSyZ-w'}, 'e7ead08d7ba7d700': {'recommendedVideo': 'https://www.youtube.com/watch?v=SVNzzi1U3GQ'}, '4e4d0c6fcb702f02': {'recommendedVideo': 'https://www.youtube.com/watch?v=c_ZJLJK5PjM'}}}, '99556cd7542dc202': {'matches': {'e573c590f3f13a53': {'recommendedVideo': 'https://www.youtube.com/watch?v=IHaNg33A5Wg'}, 'e7d0562d8c2a4821': {'recommendedVideo': 'https://www.youtube.com/watch?v=PRmMMTqyZRs'}, '4df6d55647bf1c18': {'recommendedVideo': 'https://www.youtube.com/watch?v=QE73BCLGDLE'}}}, '2e7e5b28218c2e04': {'matches': {'113434e943b24330': {'recommendedVideo': 'https://www.youtube.com/watch?v=Z2Qug2ieNd8'}, 'e7ead08d7ba7d700': {'recommendedVideo': 'https://www.youtube.com/watch?v=LkiMlG5jBZg'}, 'e7c889e02edd98ac': {'recommendedVideo': 'https://www.youtube.com/watch?v=ewp-j8wzZCY'}}}, 'a26bada9dbf2a435': {'matches': {'a5988a49391486f5': {'recommendedVideo': 'https://www.youtube.com/watch?v=f19gfOMZTtg'}, '8de227e71fe98ebe': {'recommendedVideo': 'https://www.youtube.com/watch?v=A3s9FaFDNAk'}, '53b2202ed82b5cd0': {'recommendedVideo': 'https://www.youtube.com/watch?v=A3s9FaFDNAk'}}}}