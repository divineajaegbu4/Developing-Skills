import { useState } from "react"
import { useImmer } from 'use-immer';

import { sculptureList } from "../DescribingUI/data";

export default function Interactivity() {
    const initialPosition = {
        x: 0,
        y: 0
    };

    const [shape, setShape] = useState({
        color: 'orange',
        position: initialPosition
    });

    function handleMove(dx, dy) {
        setShape({
            ...shape,
            position: {
                x: shape.position.x + dx,
                y: shape.position.y + dy,
            }
        });
    }

    function handleColorChange(e) {
        setShape({
            ...shape,
            color: e.target.value
        });
    }

    const returnCanvas = () => {
        return (
            <>
                <select
                    value={shape.color}
                    onChange={handleColorChange}
                >
                    <option value="orange">orange</option>
                    <option value="lightpink">lightpink</option>
                    <option value="aliceblue">aliceblue</option>
                </select>
                <Background
                    position={initialPosition}
                />
                <Box
                    color={shape.color}
                    position={shape.position}
                    onMove={handleMove}
                >
                    Drag me!
                </Box>
            </>
        )

    }

    return (
        <div>
            <ToolBar onPlay={() => alert("playing")} onUpload={() => alert("Uploading!")} />
            <TaskApp />
            <ShoppingCart />
            <BucketList />
            <CounterList />
            <ShapeEditor />
            <Artists />
            <Lists />
            <List />
            {returnCanvas()}
            <UpdatingObjectForm />
            <TrafficLight />
            <StateAsaSnapshot />
            <FeedbackFormPrompt />
            <FeedbackForm />
            <Gallery />
            <br />
            <Form />
            <Score />
            <FormShow />
            <br />
            <AlertButton message="Playing Button">
                Playing
            </AlertButton>
            <AlertButton message="Uploading Button">
                Uploading
            </AlertButton>
        </div>
    )
}


const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

function ShoppingCart() {
    const [
        products,
        setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        setProducts(
            products?.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        count: product?.count + 1
                    }
                } else {
                    return product
                }
            })
        )
    }



    function handleDecreaseClick(productId) {
        let nextProducts = products?.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product?.count - 1
                }
            } else {
                return product
            }
        });

        nextProducts = nextProducts.filter(p => p.count > 0)

        setProducts(nextProducts)
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product?.id}>
                    {product?.name}
                    {' '}
                    (<b>{product?.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product?.id);
                    }}>
                        +
                    </button>

                    <button onClick={() => {
                        handleDecreaseClick(product?.id);
                    }}>
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}


let initialCounters = [
    0, 0, 0
];

const CounterList = () => {
    const [counters, setCounters] = useState(initialCounters);

    const handleClick = (index) => {
        const nextCounters = counters?.map((counter, i) => {
            if (i === index) {
                return counter + 1;
            } else {
                return counter;
            }
        })

        setCounters(nextCounters);
    }

    const counter = counters?.map((counter, i) => {
        return (
            <>
                <li key={counter}>
                    {counter}
                    <button onClick={() => handleClick(i)}>+1</button>
                </li>

            </>
        )
    })



    return (
        <>
            <ul>
                {counter}
            </ul>
        </>
    )
}

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // No change
                return shape;
            } else {
                // Return a new circle 50px below
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        // Re-render with the new array
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    );
}

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

let nextId = 0;



function Artists() {
    const [artists, setArtists] = useState(initialArtists);

    const loopArtists = artists?.map((artist) => {
        return (
            <li key={artist?.id}>
                {artist?.name}
                <button onClick={() => setArtists(artists?.filter((a) => a?.id !== artist?.id))}>
                    Delete
                </button>
            </li>
        )
    })

    return <ul>{loopArtists}</ul>
}

let nextIdTodos = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

function TaskApp() {
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextIdTodos++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
        </>
    )
}


function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
      todoContent = (
        <>
          <input
            value={todo.title}
            onChange={e => {
              onChange({
                ...todo,
                title: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      todoContent = (
        <>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => {
            onChange({
              ...todo,
              done: e.target.checked
            });
          }}
        />
        {todoContent}
        <button onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </label>
    );
  }

let nextIds = 3;
const initialArtist = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

let nextIdList = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: true },
    { id: 2, title: 'Terracotta Army', seen: false },
];

function BucketList() {
    // const [myList, setMyList] = useState(initialList);
    // const [yourList, setYourList] = useState(
    //     initialList
    // );

    const [myList, setMyList] = useImmer(
        initialList
    );
    const [yourList, setYourList] = useImmer(
        initialList
    );

    function handleToggleMyList(artworkId, nextSeen) {

        // Not mutating state


        // setMyList(myList.map(artwork => {
        //     if (artwork.id === artworkId) {
        //       // Create a *new* object with changes
        //       return { ...artwork, seen: nextSeen };
        //     } else {
        //       // No changes
        //       return artwork;
        //     }
        //   }));


        // Mutating state

        // const myNextList = [...myList];
        // const artwork = myNextList.find(
        //   a => a.id === artworkId
        // );
        // artwork.seen = nextSeen;
        // setMyList(myNextList);


        // Not mutating state because it used useImmer

        setMyList(draft => {
            const artwork = draft.find(a =>
                a.id === artworkId
            );
            artwork.seen = nextSeen;
        });
    }

    function handleToggleYourList(artworkId, nextSeen) {
        // Not mutating state

        // setYourList(yourList.map(artwork => {
        //   if (artwork.id === artworkId) {
        //     // Create a *new* object with changes
        //     return { ...artwork, seen: nextSeen };
        //   } else {
        //     // No changes
        //     return artwork;
        //   }
        // }));

        // Mutating state

        // const myNextList = [...myList];
        // const artwork = myNextList.find(
        //   a => a.id === artworkId
        // );
        // artwork.seen = nextSeen;
        // setYourList(myNextList);


        // Not mutating state because it used useImmer

        setYourList(draft => {
            const artwork = draft.find(a =>
                a.id === artworkId
            );
            artwork.seen = nextSeen;
        });
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    const styleList = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <ul style={styleList}>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

function Lists() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtist
    );

    function handleClick() {
        const insertAt = 1; // Could be any index
        const nextArtists = [
            // Items before the insertion point:
            ...artists.slice(0, insertAt),
            // New item:
            { id: nextIds++, name: name },
            // Items after the insertion point:
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    function reverseHandler() {
        const reverseArr = [...artists];
        reverseArr.reverse();
        setArtists(reverseArr);
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>

            <button onClick={reverseHandler}>
                Reverse
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

function List() {
    const [name, setName] = useState("")
    const [artists, setArtists] = useState([]);

    const updateNames = () => {
        const insertAt = 1;
        setArtists([
            ...artists.slice(0, insertAt),
            { id: nextId++, name: name },
            // ...artists
            ...artists.slice(insertAt)
        ])
        setName("")
    }

    return (
        <div>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            <button
                onClick={updateNames}
            >
                Add
            </button>
            <ol>
                {artists.map((artist) => <li key={artist?.id}>{artist?.name}</li>)}
            </ol>
        </div>
    )
}

function Background({
    position
}) {
    return (
        <div style={{
            position: 'absolute',
            transform: `translate(
                ${position.x}px,
                ${position.y}px
            )`,
            width: 250,
            height: 250,
            backgroundColor: 'rgba(200, 200, 0, 0.2)',
        }} />
    );
};

function Box({
    children,
    color,
    position,
    onMove
}) {
    const [
        lastCoordinates,
        setLastCoordinates
    ] = useState(null);

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: 'grab',
                backgroundColor: color,
                position: 'absolute',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `translate(
                ${position.x}px,
                ${position.y}px
            )`,
            }}
        >{children}</div>
    );
}

function UpdatingObjectForm() {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    // Using seperate event handler

    function firstNameChangeHandler(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }

    function lastNameChangeHandler(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }

    function emailNameChangeHandler(e) {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    // Single event handler
    function onChangeHandler(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <label>
                FirstName:
                <input type="text" name="firstName" value={person.firstName} onChange={onChangeHandler} />
            </label>
            <br />
            <label>
                LastName:
                <input type="text" name="lastName" value={person.lastName} onChange={onChangeHandler} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={person.email} onChange={onChangeHandler} />
            </label>
            <div>
                Show Values
                <br />
                {`FirstName: ${person.firstName} LastName: ${person.lastName} Email: ${person.email} `}
            </div>
        </form>
    )
}

function TrafficLight() {
    const [walk, setWalk] = useState(true);


    const handleClick = () => {
        setWalk(!walk);
        alert(walk ? "Stop is Next" : "Walk is Next")
    }

    return (
        <div>
            <button onClick={handleClick}>
                Change to {walk ? "walk" : "stop"}
            </button>
            <h1 style={{ color: walk ? "darkgreen" : "red" }}>
                {walk ? "Walk" : "Stop"}
            </h1>
        </div>
    )
}

function StateAsaSnapshot() {
    const [number, setIsNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => {
                setIsNumber(n => n + 1)
                setIsNumber(n => n + 1)
                setIsNumber(n => n + 1)
            }
            }>+3 </button>

            <button onClick={() => {
                setIsNumber(number + 5);
                setIsNumber(n => n + 1);
            }}>Updater function</button>

            <button onClick={() => {
                setIsNumber(number + 5);
                setIsNumber(n => n + 1);
                setIsNumber(42);
            }}>Increase number</button>
        </div>
    )
}

function FeedbackFormPrompt() {
    function handleClick() {
        const name = prompt("What is your name?")
        alert(`Hello, ${name} !`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}

function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}

const persons = {
    name: 'Niki de Saint Phalle',
    artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
}


const AlertButton = ({ message, children }) => {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}


const FormShow = () => {
    // How to use-immer and reduce repetitive code
    const [personImmer, setPersonImmer] = useImmer({ ...persons });

    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    const handleImmerName = e => {
        setPersonImmer(draft => {
            draft.name = e.target.value
        })
    }

    const handleImmerTitle = e => {
        setPersonImmer(draft => {
            draft.artwork.title = e.target.value
        })
    }

    const handleImmerCity = e => {
        setPersonImmer(draft => {
            draft.artwork.city = e.target.value
        })
    }

    const handleImmerImage = e => {
        setPersonImmer(draft => {
            draft.artwork.image = e.target.value
        })
    }

    const handleName = (e) => {
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    const handleTitle = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
    }

    const handleCity = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    const handleImage = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        })
    }

    return (
        <>
            <label>
                Name:
                <input type="text" value={personImmer.name} onChange={handleImmerName} />
            </label>

            <br />

            <label>
                Title:
                <input type="text" value={personImmer.artwork.title} onChange={handleImmerTitle} />
            </label>

            <br />

            <label>
                City:
                <input type="text" value={personImmer.artwork.city} onChange={handleImmerCity} />
            </label>

            <br />

            <label>
                Name:
                <input type="text" value={personImmer.artwork.image} onChange={handleImmerImage} />
            </label>

            <h3>
                {`${personImmer.artwork.title} in ${personImmer.name} `}
                <br />
                {`(located in ${personImmer.artwork.city})`}
            </h3>

            <img
                src={personImmer.artwork.image}
                alt={personImmer.name}
            />
        </>
    )
}


const Score = () => {
    const [score, setScore] = useState(0);

    const increment = () => {
        setScore(prevState => prevState + 1)
    }

    return (
        <div>
            <button onClick={() => increment()}>+1</button>
            <br />
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <br />
            <h1>Score: {score}</h1>
        </div>

    )
}


const Form = () => {
    const [to, setTo] = useState("Alice");
    const [message, setMessage] = useState("Hello");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to} `)
        }, 1000)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleTo = e => {
        setTo(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                To:
                <select value={to} onChange={handleTo}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br />
            <textarea value={message} onChange={handleMessage} placeholder="message" />
            <br />
            <button type="submit">Send</button>

        </form>
    )
}

const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const hasPrev = index > 0;
    const hasNext = index < sculptureList.length - 1;

    const handleNextClick = () => {
        if (hasNext) {
            setIndex(index + 1)
        }
    }

    const handlePreviousClick = () => {
        if (hasPrev) {
            setIndex(index - 1)
        }
    }

    const handleMoreClick = () => {
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index];


    return (
        <>
            <button onClick={handleNextClick} disabled={!hasNext}>
                Next
            </button>

            <button onClick={handlePreviousClick} disabled={!hasPrev}>
                Previous
            </button>

            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index + 1} by {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? "Hide" : "show"} details
            </button>
            {showMore && <p>{sculpture?.description}</p>}
            <br />
            <img src={sculpture.url} alt={sculpture.name} />
        </>
    )
}

const ToolBar = ({ onPlay, onUpload }) => {
    return (
        <div>
            <button onClick={onPlay}>Play movie</button>
            <button onClick={onUpload}>Upload Image</button>
        </div>
    )
}