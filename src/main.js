/* eslint-disable max-classes-per-file */

class Foo {
  constructor(props) {
    Object.assign(this, props)
  }
}

class Bar {
  constructor(props) {
    Object.assign(this, props)
  }

  foos = () => Foo
}

class EntityFactory {
  #entity

  #getEntityProps

  #getRelations = []

  #props

  constructor(entity, getEntityProps, props) {
    this.#entity = entity
    this.#getEntityProps = getEntityProps
    this.#props = props
  }

  with = getRelation => {
    this.#getRelations.push(getRelation)
    return this
  }

  then = resolve => resolve(new (this.entity(this.#props))())
}

const entityFactories = new Map([
  [Bar, props => new Bar({ titulo: "abc", subtitulo: "foo", ...props })],
])

const build = (entity, props) =>
  new EntityFactory(entity, entityFactories.get(entity), props)

const main = async () => {
  const t = await build(Bar).with(bar => bar.foos)

  console.log("t", t)
}
main()
