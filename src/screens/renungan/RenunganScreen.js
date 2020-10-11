import React from 'react';
import { StyleSheet } from 'react-native';
import RenunganDetails from './RenunganDetails';

const RenunganScreen = () => {
  const renunganList = [
    {
      judul: 'TITLE',
      tanggal: '12/12/2020',
      natsAyat: 'Kejadian 1: 1',
      natsKalimat: 'Pada mulanya Allah menciptakan langit dan bumi.',
      isi: [
        "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
      ],
      refleksi: 'Lorem ipsum dolor sit amet.',
    },
  ];

  return <RenunganDetails renungan={renunganList[0]} />;
};

const styles = StyleSheet.create({});

export default RenunganScreen;