import { PubSub } from "./PubSub"
import { Output } from "./PubSub"

const testEvent1 = document.querySelector("#testEvent") as HTMLElement
const testEvent2 = document.querySelector("#testEvent2") as HTMLElement
const testEvent3 = document.querySelector("#testEvent3")

type EventFire = (this: HTMLElement | Document) => void

const eventFire: EventFire = function () {
    // console.log(this)
    const span = this.querySelector("span") as HTMLSpanElement
    span.innerText = (parseInt(span.textContent || "0") + 1).toString()

    if (this !== testEvent2 && this !== document) {
        const event = new Event("customClick")
        testEvent2.dispatchEvent(event)

        const event2 = new CustomEvent("customEvent", { detail: parseInt(span.textContent || "0") + 1 })
        testEvent3?.dispatchEvent(event2)
    }

}

testEvent1.addEventListener("click", eventFire)
testEvent2.addEventListener("customClick", eventFire as EventListener)
testEvent2.addEventListener("click", function (e) {
    console.log(e)
})
testEvent3?.addEventListener("customEvent", function (e) {
    const evento = e as CustomEvent
    console.log(e)
    console.log(evento.detail)
})
// document.addEventListener("click", eventFire)


/* PubSub Design Pattern */
const pubsub = document.getElementById("pubsub") as HTMLDivElement

function teste(data?: Output) {
    console.log("teste")
    console.log(data)
    pubsub.textContent = `data: ${data?.data} - type: ${data?.type}`
}

PubSub.subscribe("EventTest", function (data) {
    console.log("teste chamado")
    console.log(data)
})

PubSub.subscribe("EventTest", teste)
PubSub.subscribe("EventTest2", obj => {
    console.log(obj?.data, obj?.type)
    console.log(obj)
})

// PubSub.unsubscribe("EventTest", teste)

PubSub.publish("EventTest", "DATA")
PubSub.publish("EventTest2", "DATA")


