const inputFields = `
    <div class="container">
        <form type="action">
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
            <div class="button">
                 <button>Submit</button>
            </div>
        </form>
    <div>

`



function loadEvent(){

const rootElement = document.getElementById('root')

rootElement.insertAdjacentHTML('beforeend', inputFields)






}
window.addEventListener('load', loadEvent)