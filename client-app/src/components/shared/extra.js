// https://github.com/fac18/signpost/blob/master/client/src/components/AddNewService/AddNewService.js

// useEffect(
//   //checks to see if a user is a customer or vendor and will render the relevant form fields
//   () => {
//     isVendor
//       ? setSignUpState({
//           name: "",
//           email: "",
//           password: "",
//           mobile: "",
//           company_name: "",
//           alcohol: "",
//           vegan_option: "",
//         })
//       : setSignUpState({
//           name: "",
//           email: "",
//           password: "",
//           username: "",
//           age: "",
//           gender: "",
//           icecream_flavour: "",
//         })
//   },
//   []
// )

// const [submission, handleSubmission] = React.useState([])
// React.useEffect(() => {
//   const reqOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "React POST Request Example" }),
//   }
// fetch(url goes here, reqOptions)
//   .then(data =>)

// function reducer(state, { field, value }) {
//   return {
//     ...state,
//     [field]: value,
//   }
// }

// if (isVendor) {
//   const {
//     name,
//     email,
//     password,
//     mobile,
//     company_name,
//     alcohol,
//     vegan_option,
//   } = state
// } else {
//   const {
//     name,
//     email,
//     password,
//     username,
//     age,
//     gender,
//     icecream_flavour,
//   } = state
// }

//function handleFormSubmission(event){
//const username = document.getElementById('customerName').value
//axios.post(api url)
//.then(result =>)
//}

// function signUp({ redirect }) {
//   document.title = "Sign Up"
//   app.innerHTML = html
//   app.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.target)
//     const formObject = Object.fromEntries(formData)
//     fetch("https://dogs-rest.herokuapp.com/v1/users/", {
//       method: "POST",
//       body: JSON.stringify(formObject),

//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         window.localStorage.setItem("id", json.id)
//         window.localStorage.setItem("token", json.access_token)
//         redirect("/")
//       })
//       .catch((error) => {
//         console.log("error in signup!")
//         app.querySelector("#message").innerHTML = `<h1>${error} haha</h1>`
//       })
//   })
// }
