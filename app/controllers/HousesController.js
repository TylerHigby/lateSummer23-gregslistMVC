import { AppState } from "../AppState.js"

function _drawHouses() {
  let houses = AppState.houses
  let content = ''
  houses.forEach(house => content += house.houseTemplate)
  console.log('drawing houses', content)

}

export class HousesController {
  constructor() {
    console.log('hello from the housescontroller')
    _drawHouses()
  }
}