import "./App.css";
import Arrays from "./Component/Formik-Docs/Arrays";
import { FieldLevelValidation } from "./Component/Formik-Docs/FieldLevelValidation";
import GettingStarted from "./Component/Formik-Docs/GettingStarted";
import Tutorial from "./Component/Formik-Docs/Tutorial";
import SignupForm from "./Component/Formik-Docs/UseFieldFormik";
import DependentField from "./Component/Formik-Docs/DependentFields";
import ArrayList from "./Component/Formik-Docs/ArrayList";
import { WithFormikHandler } from "./Component/Formik-Docs/WithFormikView";
import { TwoFactorVerificationForm } from "./Component/Formik-Docs/UseFormikContextEx";
import CreateForms from "./Component/FormikVideos/Forms"
import { FriendList } from "./Component/Formik-Docs/FieldFormikRender";
import YoutubeForm from "./Component/FormikVideos/YoutubeFormik";
import RealFormikApp from "./Component/FormikVideos/RealFormikApp";
import LoginForm from "./Component/FormikVideos/LoginForm";
import RegistrationForm from "./Component/FormikVideos/RegistrationForm";
import EnrollmentForm from "./Component/FormikVideos/EnrollmentForm";
import FormContainer from "./Component/Practice/FormikContainer";
import ChakraUIContainer from "./Component/Practice/ChakraUIContainer";
import { ChakraBaseProvider, extendBaseTheme, ChakraProvider } from '@chakra-ui/react'

// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import FormikContainer from "./Component/Practice/FormikContainer";

const { Button } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })
// import {Theme, ThemeProvider } from "@chakra-ui/core"
// import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <>
      <div className="App">
        <FormikContainer />
      </div>
    </>
  );
}

export default App;

// <div className="App">
//<FormContainer />
//   <EnrollmentForm />
//   <RegistrationForm />
//   <RealFormikApp />
//   <YoutubeForm />
//   <CreateForms />
//   <GettingStarted />
//   <Tutorial />
//   <SignupForm />
//   <br />
//   <br />
//   <FieldLevelValidation />
//   <Arrays />
//   <DependentField />
//   <ArrayList />
//   <FriendList />
//   <TwoFactorVerificationForm />
//   <WithFormikHandler />
// </div>

// <ChakraProvider>
// <ChakraUIContainer />
// </ChakraProvider>