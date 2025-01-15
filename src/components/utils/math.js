import { create, all } from 'mathjs'

const math = create(all)

export const evaluateExpression = (expression) => {
  try {
    const result = math.evaluate(expression)
    return typeof result === 'number' ? result.toPrecision(12) : result.toString()
  } catch (error) {
    return 'Erro'
  }
}

export const applyFunction = (func, value) => {
  try {
    const result = math.evaluate(`${func}(${value})`)
    return typeof result === 'number' ? result.toPrecision(12) : result.toString()
  } catch (error) {
    return 'Erro'
  }
}

