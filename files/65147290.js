case SELECT_VEHICLE.REPLACE:
      return {
        ...state,
        vehicleArray: state.vehicleArray.map((vehicle) => {
          if (vehicle.name === action.previousVehicleName) {
            // this mutates the existing object - don't do this!
            vehicle["total_no"] += 1;
            vehicle.selected = false;
          } else if (vehicle.name === action.newVehicleName) {
            vehicle["total_no"] -= 1;
            vehicle.selected = true;
          }
          return vehicle;
        })
      };
