const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function calcImc(weight, height) {
  return (weight / ((height/100) ** 2)).toFixed(2)   
}

for (let i = 0; i <= patients.length; i++) {
  let imcPatient = calcImc(patients[i].weight, patients[i].height)
  alert(`Paciente ${patients[i].name} possui o IMC de:  ${imcPatient}`)
}