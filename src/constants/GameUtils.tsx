import {useState} from 'react';
import {TGameType} from '../types/gametype';
import {TGameDifficulty} from '../types/gamedifficulty';

function useGameUtils(difficuly: TGameDifficulty) {
  const [score, setScore] = useState(0);
  const [userSelect, setUserSelect] = useState<TGameType>();
  const [aiSelect, setAiSelect] = useState<TGameType>();
  const [userStatus, setUserStatus] = useState<'win' | 'lose' | 'draw'>();
  function wait(milliseconds: number) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  const handleUserSelect = async (select: TGameType) => {
    setUserSelect(select);
    await wait(1000);
    const data: TGameType | undefined = handleAiSelect();
    await wait(1000);
    handleWhoWin(select, data);
  };

  const handleAiSelect = () => {
    const min = 1;
    const max = difficuly === 'EasyLevel' ? 3 : 5;
    const randomAiSelect = Math.floor(Math.random() * (max - min + 1)) + min;
    let aiSelection: TGameType | undefined;
    switch (randomAiSelect) {
      case 1:
        aiSelection = 'paper';
        setAiSelect('paper');
        break;
      case 2:
        aiSelection = 'scissor';
        setAiSelect('scissor');
        break;
      case 3:
        aiSelection = 'rock';
        setAiSelect('rock');
        break;
      case 4:
        aiSelection = 'spock';
        setAiSelect('spock');
        break;
      case 5:
        aiSelection = 'lizard';
        setAiSelect('lizard');
        break;
    }
    return aiSelection;
  };

  const handleWhoWin = (
    userSelected: TGameType | undefined,
    aiSelected: TGameType | undefined,
  ) => {
    switch (userSelected) {
      case 'scissor':
        if (aiSelected === 'paper' || aiSelected === 'lizard') {
          setUserStatus('win');
          setScore(n => n + 1);
        }
        if (aiSelected === 'rock' || aiSelected === 'spock') {
          setUserStatus('lose');
          setScore(n => (n === 0 ? (n = 0) : n - 1));
        }
        if (aiSelected === 'scissor') {
          setUserStatus('draw');
        }
        break;
      case 'paper':
        if (aiSelected === 'paper') {
          setUserStatus('draw');
        }
        if (aiSelected === 'spock' || aiSelected === 'rock') {
          setUserStatus('win');
          setScore(n => n + 1);
        }
        if (aiSelected === 'scissor' || aiSelected === 'lizard') {
          setUserStatus('lose');
          setScore(n => (n === 0 ? (n = 0) : n - 1));
        }
        break;
      case 'rock':
        if (aiSelected === 'paper' || aiSelected === 'spock') {
          setUserStatus('lose');
          setScore(n => (n === 0 ? (n = 0) : n - 1));
        }
        if (aiSelected === 'rock') {
          setUserStatus('draw');
        }
        if (aiSelected === 'scissor' || aiSelected === 'lizard') {
          setUserStatus('win');
          setScore(n => n + 1);
        }
        break;
      case 'spock':
        if (aiSelected === 'paper' || aiSelected === 'lizard') {
          setUserStatus('lose');
          setScore(n => (n === 0 ? (n = 0) : n - 1));
        }
        if (aiSelected === 'spock') {
          setUserStatus('draw');
        }
        if (aiSelected === 'rock' || aiSelected === 'scissor') {
          setUserStatus('win');
          setScore(n => n + 1);
        }
        break;
      case 'lizard':
        if (aiSelected === 'rock' || aiSelected === 'scissor') {
          setUserStatus('lose');
          setScore(n => (n === 0 ? (n = 0) : n - 1));
        }
        if (aiSelected === 'lizard') {
          setUserStatus('draw');
        }
        if (aiSelected === 'spock' || aiSelected === 'paper') {
          setUserStatus('win');
          setScore(n => n + 1);
        }
        break;
    }
  };

  const handlePlayAgainButton = () => {
    setAiSelect(undefined);
    setUserSelect(undefined);
    setUserStatus(undefined);
  };

  return {
    score,
    userSelect,
    aiSelect,
    userStatus,
    handleUserSelect,
    handlePlayAgainButton,
  };
}

export default useGameUtils;
