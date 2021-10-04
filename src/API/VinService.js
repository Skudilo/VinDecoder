import axios from "axios";

export default class VinService {
  static async getDecode(vin) {
    return await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
    );
  }

  static async getVariableList() {
    return await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
    );
  }

  static async getVariableByName(name) {
    return await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/${name}?format=json`
    );
  }
}
