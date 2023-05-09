import React, {useState} from "react";

import { getImageUrl } from "./Util";
import { person, poem, recipes } from "./data"

let initialStories = [
    { id: 0, label: "Ankit's Story" },
    { id: 1, label: "Taylor's Story" },
];


export default function Markups() {
    const [stories, ,] = useState([...initialStories]);


    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };

    let cups = [];

    for (let i = 1; i <= 10; i++) {
        cups.push(<Cup key={i} guest={i} />)
    }


    return (
        <Container title="React Documentation">
            <FirstComponent />
            <DoubleCurlies person={person} />
            <TodoList />
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />            <Avatar
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
                size={100}
            />
            <DefaultProps />
            <Drink name="tea" />
            <Drink name="coffee" />
            <RenderingListItems />

            <h1>Recipes</h1>
            {recipes?.map((recipe) => {
                return <RecipeList {...recipe} key={recipe?.id} />
            })}

            <Poem />

            <h1>Guest</h1>
            {cups}
            <h1>Stories</h1>
            <Stories stories={stories} />
        </Container>
    )
}

const Stories = ({stories}) => {
  let storiesArr = stories.slice()

  storiesArr.push({
    id: 2,
    label: "Created Date"
  })

  return (
    <div>
     {storiesArr.map((story)=>{
        return (
            <li key={story?.id}>{story?.label}</li>
        )
     })}
    </div>
  )
}

const Cup = ({ guest }) => {
    return <p>Tea cup guest #{guest}</p>
}

const Poem = () => {
    let output = [];

    poem?.lines?.forEach((poem, index) => {
        output.push(
            <hr key={poem + "-seperator"} />
        )

        output.push(
            <p key={poem}>{poem}</p>
        )
    })

    output.shift();

    return (
        <article>
            {output}
        </article>
    )
}


const FirstComponent = () => {
    return (
        <div>
            <h1>Divine is heading towards market!</h1>
            <ul>
                <li>Orange</li>
                <li>Watermelon</li>
                <li>Pineapple</li>
                <li>Fibre</li>
            </ul>
        </div>
    )
}

const DoubleCurlies = ({ person }) => {

    return (
        <div>
            <h1 style={person.theme}>{person.name}</h1>
        </div>
    )
}

const baseUrl = 'https://i.imgur.com/';
const persons = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'b',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const TodoList = () => {
    return (
        <div style={persons.theme}>
            <h1>{persons.name}'s Todos</h1>
            <img
                className="avatar"
                src={`${baseUrl + persons.imageId + persons.imageSize}.jpg`}
                alt={persons.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}


const Avatar = ({ person, size, }) => {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt="Lin Lanying"
            width={size}
            height={size}
        />

    );
}

const DefaultProps = ({ color = "red", size = 100 }) => {
    return (
        <p style={{ color: color, fontSize: size }}>Chioma is a good girl!</p>
    )
}


const Drink = ({ name }) => {
    let part, caffeine, age;
    if (name === 'tea') {
        part = 'leaf';
        caffeine = '15–70 mg/cup';
        age = '4,000+ years';
    } else if (name === 'coffee') {
        part = 'bean';
        caffeine = '80–185 mg/cup';
        age = '1,000+ years';
    }
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{part}</dd>
                <dt>Caffeine content</dt>
                <dd>{caffeine}</dd>
                <dt>Age</dt>
                <dd>{age}</dd>
            </dl>
        </section>
    );
}


const RenderingListItems = () => {
    const chemists = person.filter(person =>
        person.profession === 'chemist'
    );

    const listItem = chemists.map(person => {
        return (
            <ul key={person?.id}>
                <li>
                    <img
                        src={getImageUrl(person)}
                        alt={person.name}
                    />
                    <p>
                        <b>{person.name}:</b>
                        {' ' + person.profession + ' '}
                        known for {person.accomplishment}
                    </p>
                </li>
            </ul>
        )
    }

    );

    const listItems = person.map((person) => {
        return (
            <ul key={person?.id}>
                <li>{person?.name}</li>
                <li>{person?.profession}</li>
            </ul>
        )
    })

    return (
        <>
            {listItems}
            <h1>Filter</h1>
            {listItem}
        </>
    )

}


function RecipeList({ key, name, ingredients }) {
    return (
        <div>
            <div key={key}>
                <h2>{name}</h2>
                <ol>
                    {ingredients.map(recipe => <li key={recipe}>{recipe}</li>
                    )}
                </ol>
            </div>
        </div>
    );
}

const Container = ({ children, title }) => {
    return (
        <div className="content">
            <div className="content--view">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}