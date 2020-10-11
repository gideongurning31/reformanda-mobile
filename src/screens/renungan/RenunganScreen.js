import React, { useState } from 'react';
import RenunganDetails from './RenunganDetails';
import { getAll } from '../../services/RenunganService';

const emptyData = {
  id: '',
  tanggal: '',
  natsAyat: '',
  natsKalimat: '',
  content: [],
  refleksi: '',
  penulis: '',
  youtubeUrl: '',
};

const RenunganScreen = () => {
  getAll()
    .then((response) => setRenunganList(response.data.data))
    .catch((error) => console.error('===error', error));

  const [renunganList, setRenunganList] = useState([emptyData]);

  return <RenunganDetails renungan={renunganList[0]} />;
};

export default RenunganScreen;
