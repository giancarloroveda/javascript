const inputInches = document.querySelector("#inches") as HTMLInputElement
const inputCentimeters = document.querySelector("#centimeter") as HTMLInputElement

type um = "centimeters" | "inches"

const convertUnitOfMeasurement: (value: number, umValue: um, umReturn: um) => number = function (
    value,
    umValue,
    umReturn
) {
    const ums: {} = {
        centimeters: 1,
        inches: 2.54,
    }

    return value * (ums[umValue] / ums[umReturn])
}

type FnListenerInput = (this: HTMLInputElement, e: Event) => void

const convertInchesToCm: FnListenerInput = function (e) {
    if (!inputInches.value) {
        inputCentimeters.value = ""
        return
    }
    const inputValue: number = parseFloat(inputInches.value)
    const newValue: number = convertUnitOfMeasurement(inputValue, "inches", "centimeters")
    inputCentimeters.value = newValue.toFixed(2).toString()
}

inputInches.addEventListener("input", convertInchesToCm)

const convertCmToInches: FnListenerInput = function (e) {
    if (!inputCentimeters.value) {
        inputInches.value = ""
        return
    }
    const inputValue: number = parseFloat(inputCentimeters.value)
    const newValue: number = convertUnitOfMeasurement(inputValue, "centimeters", "inches")
    inputInches.value = newValue.toFixed(3).toString()
}

inputCentimeters.addEventListener("input", convertCmToInches)
