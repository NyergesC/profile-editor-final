const inputFields = `
    <div class="container">
        <form id="form">
            <div class="name">
                <label for="firstname">Firstname:</label>
                <input type="text" id="firstname" name="firstname">
                <label for="zip">Zip code:</label>
                <input type="text" id="zip" name ="zip">
            </div>
            <div class="zip-country">
                <label for="surname">Surname:</label>
                <input type="text" id="surname" name="surname">
                <label for="country">Country:</label>
                <input type="text" id="country" name="country">
            </div>
            <div class="city-street">
                <label for="city">City:</label>
                <input type="text" id="city" name="city"
                <label for="house">House number:</label>
                <input type="text" id="house" name="house">
            </div>
            <div class="house">
                <label for="street">Street:</label>
                <input type="text" id="street" name="street">
            </div>
            <div class="introduction">
                <label for="introduction">Introduce yourself:</label>
                <input type="text" id="introduction" name="introduction">
            </div>

            <div class="save">
                 <button>Save</button>
            </div>
            <div class="delete">
                 <button>Delete</button>
            </div>
        </form>
    </div>

`

function loadEvent(){

    const rootElement = document.getElementById('root')

    rootElement.insertAdjacentHTML('beforeend', inputFields)

    let saveBtn = document.querySelector(".save")
    let formElement = document.getElementById('form')

    formElement.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('firstname', e.target.querySelector(`input[name='firstname']`).value);
        formData.append('surname', e.target.querySelector(`input[name='surname']`).value);
        formData.append('zip', e.target.querySelector(`input[name='zip']`).value);
        formData.append('country', e.target.querySelector(`input[name='country']`).value);
        formData.append('city', e.target.querySelector(`input[name='city']`).value);
        formData.append('street', e.target.querySelector(`input[name='street']`).value);
        formData.append('house', e.target.querySelector(`input[name='house']`).value);
        formData.append('introduction', e.target.querySelector(`input[name='introduction']`).value);

        const fetchSettings = {
            method : "POST",
            body: formData
        }

        fetch('/', fetchSettings)
            .then(async data => {
                if (data.status === 200){
                    const res = await data.json()
                    alert("Data is finally mine")
                }
            
            })
            .catch(error =>{
                e.target.outerHTML = "error" 
            })

    })

}
window.addEventListener('load', loadEvent)