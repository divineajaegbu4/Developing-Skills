import React, { useState } from "react";

export default function ManagingState() {
  return (
    <div>
      <h1>Managing State</h1>
      <Form />
      <MailClient />
    </div>
  );
}

function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState(null);

  function handleHover(letter) {
    setHighlightedLetter(letter);
  }

  function handleStar(starred) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedLetter}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}

function Letter({ letter, isHighlighted, onHover, onToggleStar }) {
  return (
    <li
      style={{backgroundColor: isHighlighted ? "blue" : ""}}
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter.id);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}

const initialLetters = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

export function Form() {
  const [showValue, setShowValue] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [names, setNames] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValue((prev) => !prev);
    setShowInput((prev) => !prev);
  };

  const handleChange = (e) => {
    setNames({
      ...names,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <label>
        FirstName: <strong>{showValue && names.firstName}</strong>
        {showInput && (
          <input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={names.firstName}
            onChange={handleChange}
          />
        )}
      </label>
      <br />
      <label>
        LastName: <strong>{showValue && names.lastName}</strong>
        {showInput && (
          <input
            type="text"
            placeholder="Enter first name"
            name="lastName"
            value={names.lastName}
            onChange={handleChange}
          />
        )}
      </label>
      <br />
      <button type="submit">
        {showValue ? "Edit profile" : "Save profile"}
      </button>
      <br />
      <span>Hello, {`${names.firstName}  ${names.lastName}`}</span>
    </form>
  );
}
