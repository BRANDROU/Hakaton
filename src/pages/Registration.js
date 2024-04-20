import React, { useState } from 'react';

const RegistrationForm = () => {
  const [teamName, setTeamName] = useState('');
  const [banner, setBanner] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [participant, setParticipant] = useState({ last_name: '', first_name: '', middle_name: '', photo: '', aboutMe: '' });
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleParticipantChange = (e, index) => {
    const { name, value } = e.target;
    setParticipants((prevParticipants) =>
      prevParticipants.map((p, i) => (i === index ? { ...p, [name]: value } : p))
    );
  };

  const handleParticipantAdd = () => {
    setParticipants((prevParticipants) => [...prevParticipants, participant]);
    setParticipant({ last_name: '', first_name: '', middle_name: '', photo: '', aboutMe: '' });
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    setBanner(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ваш код для обработки данных формы

    // Сброс формы после отправки
    setTeamName('');
    setBanner(null);
    setParticipants([]);
    setParticipant({ last_name: '', first_name: '', middle_name: '', photo: '', aboutMe: '' });
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Название команды:
          <input type="text" name="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Баннер:
          <input type="file" accept="image/*" onChange={handleBannerChange} />
        </label>
      </div>
      <div>
        <button type="button" onClick={handleParticipantAdd}>
          Добавить участника
        </button>
        {participants.map((p, index) => (
          <div key={index}>
            <label>
              Фамилия:
              <input
                type="text"
                name="last_name"
                value={p.last_name}
                onChange={(e) => handleParticipantChange(e, index)}
              />
            </label>
            <label>
              Имя:
              <input
                type="text"
                name="first_name"
                value={p.first_name}
                onChange={(e) => handleParticipantChange(e, index)}
              />
            </label>
            <label>
              Отчество:
              <input
                type="text"
                name="middle_name"
                value={p.middle_name}
                onChange={(e) => handleParticipantChange(e, index)}
              />
            </label>
            <label>
              Фото:
              <input type="file" accept="image/*" onChange={(e) => handleParticipantChange(e, index)} />
            </label>
            <label>
              Обо мне:
              <input
                type="text"
                name="aboutMe"
                value={p.aboutMe}
                onChange={(e) => handleParticipantChange(e, index)}
              />
            </label>
          </div>
        ))}
      </div>
      <div>
        <label>
          Электронная почта:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Логин:
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Пароль:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <button type="submit">Зарегистрироваться</button>
      </div>
    </form>
  );
};

export default RegistrationForm;