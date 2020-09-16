"use strict";

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-classes-per-file */
class Foo {
  constructor(props) {
    Object.assign(this, props);
  }

}

class Bar {
  constructor(props) {
    _defineProperty(this, "foos", () => Foo);

    Object.assign(this, props);
  }

}

var _entity = new WeakMap();

var _getEntityProps = new WeakMap();

var _getRelations = new WeakMap();

var _props = new WeakMap();

class EntityFactory {
  constructor(entity, getEntityProps, props) {
    _entity.set(this, {
      writable: true,
      value: void 0
    });

    _getEntityProps.set(this, {
      writable: true,
      value: void 0
    });

    _getRelations.set(this, {
      writable: true,
      value: []
    });

    _props.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "with", getRelation => {
      _classPrivateFieldGet(this, _getRelations).push(getRelation);

      return this;
    });

    _defineProperty(this, "then", resolve => resolve(new (this.entity(_classPrivateFieldGet(this, _props)))()));

    _classPrivateFieldSet(this, _entity, entity);

    _classPrivateFieldSet(this, _getEntityProps, getEntityProps);

    _classPrivateFieldSet(this, _props, props);
  }

}

const entityFactories = new Map([[Bar, props => new Bar({
  titulo: "abc",
  subtitulo: "foo",
  ...props
})]]);

const build = (entity, props) => new EntityFactory(entity, entityFactories.get(entity), props);

const main = async () => {
  const t = await build(Bar).with(bar => bar.foos);
  console.log("t", t);
};

main();