
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model VehicleModel
 * 
 */
export type VehicleModel = $Result.DefaultSelection<Prisma.$VehicleModelPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model PartType
 * 
 */
export type PartType = $Result.DefaultSelection<Prisma.$PartTypePayload>
/**
 * Model PartModel
 * 
 */
export type PartModel = $Result.DefaultSelection<Prisma.$PartModelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const State: {
  new: 'new',
  refurbished: 'refurbished',
  used: 'used',
  broken: 'broken',
  scrapped: 'scrapped',
  maintenance: 'maintenance'
};

export type State = (typeof State)[keyof typeof State]

}

export type State = $Enums.State

export const State: typeof $Enums.State

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Warehouses
 * const warehouses = await prisma.warehouse.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Warehouses
   * const warehouses = await prisma.warehouse.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleModel`: Exposes CRUD operations for the **VehicleModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleModels
    * const vehicleModels = await prisma.vehicleModel.findMany()
    * ```
    */
  get vehicleModel(): Prisma.VehicleModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partType`: Exposes CRUD operations for the **PartType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartTypes
    * const partTypes = await prisma.partType.findMany()
    * ```
    */
  get partType(): Prisma.PartTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partModel`: Exposes CRUD operations for the **PartModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartModels
    * const partModels = await prisma.partModel.findMany()
    * ```
    */
  get partModel(): Prisma.PartModelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Warehouse: 'Warehouse',
    Brand: 'Brand',
    Vehicle: 'Vehicle',
    VehicleModel: 'VehicleModel',
    Part: 'Part',
    PartType: 'PartType',
    PartModel: 'PartModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "warehouse" | "brand" | "vehicle" | "vehicleModel" | "part" | "partType" | "partModel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      VehicleModel: {
        payload: Prisma.$VehicleModelPayload<ExtArgs>
        fields: Prisma.VehicleModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>
          }
          findFirst: {
            args: Prisma.VehicleModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>
          }
          findMany: {
            args: Prisma.VehicleModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>[]
          }
          create: {
            args: Prisma.VehicleModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>
          }
          createMany: {
            args: Prisma.VehicleModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>[]
          }
          delete: {
            args: Prisma.VehicleModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>
          }
          update: {
            args: Prisma.VehicleModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>
          }
          deleteMany: {
            args: Prisma.VehicleModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>[]
          }
          upsert: {
            args: Prisma.VehicleModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleModelPayload>
          }
          aggregate: {
            args: Prisma.VehicleModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleModel>
          }
          groupBy: {
            args: Prisma.VehicleModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleModelCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleModelCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      PartType: {
        payload: Prisma.$PartTypePayload<ExtArgs>
        fields: Prisma.PartTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>
          }
          findFirst: {
            args: Prisma.PartTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>
          }
          findMany: {
            args: Prisma.PartTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>[]
          }
          create: {
            args: Prisma.PartTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>
          }
          createMany: {
            args: Prisma.PartTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>[]
          }
          delete: {
            args: Prisma.PartTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>
          }
          update: {
            args: Prisma.PartTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>
          }
          deleteMany: {
            args: Prisma.PartTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>[]
          }
          upsert: {
            args: Prisma.PartTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartTypePayload>
          }
          aggregate: {
            args: Prisma.PartTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartType>
          }
          groupBy: {
            args: Prisma.PartTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PartTypeCountAggregateOutputType> | number
          }
        }
      }
      PartModel: {
        payload: Prisma.$PartModelPayload<ExtArgs>
        fields: Prisma.PartModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>
          }
          findFirst: {
            args: Prisma.PartModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>
          }
          findMany: {
            args: Prisma.PartModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>[]
          }
          create: {
            args: Prisma.PartModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>
          }
          createMany: {
            args: Prisma.PartModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>[]
          }
          delete: {
            args: Prisma.PartModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>
          }
          update: {
            args: Prisma.PartModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>
          }
          deleteMany: {
            args: Prisma.PartModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>[]
          }
          upsert: {
            args: Prisma.PartModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartModelPayload>
          }
          aggregate: {
            args: Prisma.PartModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartModel>
          }
          groupBy: {
            args: Prisma.PartModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartModelCountArgs<ExtArgs>
            result: $Utils.Optional<PartModelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    warehouse?: WarehouseOmit
    brand?: BrandOmit
    vehicle?: VehicleOmit
    vehicleModel?: VehicleModelOmit
    part?: PartOmit
    partType?: PartTypeOmit
    partModel?: PartModelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    vehicles: number
    parts: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | WarehouseCountOutputTypeCountVehiclesArgs
    parts?: boolean | WarehouseCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    partModels: number
    vehicleModels: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partModels?: boolean | BrandCountOutputTypeCountPartModelsArgs
    vehicleModels?: boolean | BrandCountOutputTypeCountVehicleModelsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountPartModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartModelWhereInput
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountVehicleModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleModelWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    parts: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | VehicleCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }


  /**
   * Count Type VehicleModelCountOutputType
   */

  export type VehicleModelCountOutputType = {
    vehciles: number
  }

  export type VehicleModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehciles?: boolean | VehicleModelCountOutputTypeCountVehcilesArgs
  }

  // Custom InputTypes
  /**
   * VehicleModelCountOutputType without action
   */
  export type VehicleModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModelCountOutputType
     */
    select?: VehicleModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleModelCountOutputType without action
   */
  export type VehicleModelCountOutputTypeCountVehcilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type PartTypeCountOutputType
   */

  export type PartTypeCountOutputType = {
    parts: number
    PartModel: number
  }

  export type PartTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | PartTypeCountOutputTypeCountPartsArgs
    PartModel?: boolean | PartTypeCountOutputTypeCountPartModelArgs
  }

  // Custom InputTypes
  /**
   * PartTypeCountOutputType without action
   */
  export type PartTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartTypeCountOutputType
     */
    select?: PartTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartTypeCountOutputType without action
   */
  export type PartTypeCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }

  /**
   * PartTypeCountOutputType without action
   */
  export type PartTypeCountOutputTypeCountPartModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartModelWhereInput
  }


  /**
   * Count Type PartModelCountOutputType
   */

  export type PartModelCountOutputType = {
    parts: number
  }

  export type PartModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | PartModelCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * PartModelCountOutputType without action
   */
  export type PartModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModelCountOutputType
     */
    select?: PartModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartModelCountOutputType without action
   */
  export type PartModelCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vehicles?: boolean | Warehouse$vehiclesArgs<ExtArgs>
    parts?: boolean | Warehouse$partsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | Warehouse$vehiclesArgs<ExtArgs>
    parts?: boolean | Warehouse$partsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      parts: Prisma.$PartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehouseUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends Warehouse$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parts<T extends Warehouse$partsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse updateManyAndReturn
   */
  export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.vehicles
   */
  export type Warehouse$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Warehouse.parts
   */
  export type Warehouse$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    name: string
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    partModels?: boolean | Brand$partModelsArgs<ExtArgs>
    vehicleModels?: boolean | Brand$vehicleModelsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partModels?: boolean | Brand$partModelsArgs<ExtArgs>
    vehicleModels?: boolean | Brand$vehicleModelsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      partModels: Prisma.$PartModelPayload<ExtArgs>[]
      vehicleModels: Prisma.$VehicleModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partModels<T extends Brand$partModelsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$partModelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicleModels<T extends Brand$vehicleModelsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$vehicleModelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.partModels
   */
  export type Brand$partModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    where?: PartModelWhereInput
    orderBy?: PartModelOrderByWithRelationInput | PartModelOrderByWithRelationInput[]
    cursor?: PartModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartModelScalarFieldEnum | PartModelScalarFieldEnum[]
  }

  /**
   * Brand.vehicleModels
   */
  export type Brand$vehicleModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    where?: VehicleModelWhereInput
    orderBy?: VehicleModelOrderByWithRelationInput | VehicleModelOrderByWithRelationInput[]
    cursor?: VehicleModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleModelScalarFieldEnum | VehicleModelScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
    vehicleModelId: number | null
    warehouseId: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
    vehicleModelId: number | null
    warehouseId: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    serialNumber: string | null
    code: string | null
    vehicleModelId: number | null
    warehouseId: number | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    serialNumber: string | null
    code: string | null
    vehicleModelId: number | null
    warehouseId: number | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    serialNumber: number
    code: number
    vehicleModelId: number
    warehouseId: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
    vehicleModelId?: true
    warehouseId?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
    vehicleModelId?: true
    warehouseId?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    serialNumber?: true
    code?: true
    vehicleModelId?: true
    warehouseId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    serialNumber?: true
    code?: true
    vehicleModelId?: true
    warehouseId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    serialNumber?: true
    code?: true
    vehicleModelId?: true
    warehouseId?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    serialNumber: string
    code: string
    vehicleModelId: number
    warehouseId: number
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    code?: boolean
    vehicleModelId?: boolean
    warehouseId?: boolean
    vehicleModel?: boolean | VehicleModelDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    parts?: boolean | Vehicle$partsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    code?: boolean
    vehicleModelId?: boolean
    warehouseId?: boolean
    vehicleModel?: boolean | VehicleModelDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    code?: boolean
    vehicleModelId?: boolean
    warehouseId?: boolean
    vehicleModel?: boolean | VehicleModelDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    serialNumber?: boolean
    code?: boolean
    vehicleModelId?: boolean
    warehouseId?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serialNumber" | "code" | "vehicleModelId" | "warehouseId", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleModel?: boolean | VehicleModelDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    parts?: boolean | Vehicle$partsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleModel?: boolean | VehicleModelDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleModel?: boolean | VehicleModelDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      vehicleModel: Prisma.$VehicleModelPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      parts: Prisma.$PartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serialNumber: string
      code: string
      vehicleModelId: number
      warehouseId: number
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicleModel<T extends VehicleModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleModelDefaultArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parts<T extends Vehicle$partsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly serialNumber: FieldRef<"Vehicle", 'String'>
    readonly code: FieldRef<"Vehicle", 'String'>
    readonly vehicleModelId: FieldRef<"Vehicle", 'Int'>
    readonly warehouseId: FieldRef<"Vehicle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.parts
   */
  export type Vehicle$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model VehicleModel
   */

  export type AggregateVehicleModel = {
    _count: VehicleModelCountAggregateOutputType | null
    _avg: VehicleModelAvgAggregateOutputType | null
    _sum: VehicleModelSumAggregateOutputType | null
    _min: VehicleModelMinAggregateOutputType | null
    _max: VehicleModelMaxAggregateOutputType | null
  }

  export type VehicleModelAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type VehicleModelSumAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type VehicleModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
  }

  export type VehicleModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
  }

  export type VehicleModelCountAggregateOutputType = {
    id: number
    name: number
    brandId: number
    _all: number
  }


  export type VehicleModelAvgAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type VehicleModelSumAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type VehicleModelMinAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
  }

  export type VehicleModelMaxAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
  }

  export type VehicleModelCountAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    _all?: true
  }

  export type VehicleModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleModel to aggregate.
     */
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     */
    orderBy?: VehicleModelOrderByWithRelationInput | VehicleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleModels
    **/
    _count?: true | VehicleModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleModelMaxAggregateInputType
  }

  export type GetVehicleModelAggregateType<T extends VehicleModelAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleModel[P]>
      : GetScalarType<T[P], AggregateVehicleModel[P]>
  }




  export type VehicleModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleModelWhereInput
    orderBy?: VehicleModelOrderByWithAggregationInput | VehicleModelOrderByWithAggregationInput[]
    by: VehicleModelScalarFieldEnum[] | VehicleModelScalarFieldEnum
    having?: VehicleModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleModelCountAggregateInputType | true
    _avg?: VehicleModelAvgAggregateInputType
    _sum?: VehicleModelSumAggregateInputType
    _min?: VehicleModelMinAggregateInputType
    _max?: VehicleModelMaxAggregateInputType
  }

  export type VehicleModelGroupByOutputType = {
    id: number
    name: string
    brandId: number
    _count: VehicleModelCountAggregateOutputType | null
    _avg: VehicleModelAvgAggregateOutputType | null
    _sum: VehicleModelSumAggregateOutputType | null
    _min: VehicleModelMinAggregateOutputType | null
    _max: VehicleModelMaxAggregateOutputType | null
  }

  type GetVehicleModelGroupByPayload<T extends VehicleModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleModelGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleModelGroupByOutputType[P]>
        }
      >
    >


  export type VehicleModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    vehciles?: boolean | VehicleModel$vehcilesArgs<ExtArgs>
    _count?: boolean | VehicleModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleModel"]>

  export type VehicleModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleModel"]>

  export type VehicleModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleModel"]>

  export type VehicleModelSelectScalar = {
    id?: boolean
    name?: boolean
    brandId?: boolean
  }

  export type VehicleModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandId", ExtArgs["result"]["vehicleModel"]>
  export type VehicleModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    vehciles?: boolean | VehicleModel$vehcilesArgs<ExtArgs>
    _count?: boolean | VehicleModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type VehicleModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $VehicleModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleModel"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      vehciles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brandId: number
    }, ExtArgs["result"]["vehicleModel"]>
    composites: {}
  }

  type VehicleModelGetPayload<S extends boolean | null | undefined | VehicleModelDefaultArgs> = $Result.GetResult<Prisma.$VehicleModelPayload, S>

  type VehicleModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleModelCountAggregateInputType | true
    }

  export interface VehicleModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleModel'], meta: { name: 'VehicleModel' } }
    /**
     * Find zero or one VehicleModel that matches the filter.
     * @param {VehicleModelFindUniqueArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleModelFindUniqueArgs>(args: SelectSubset<T, VehicleModelFindUniqueArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleModelFindUniqueOrThrowArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleModelFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelFindFirstArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleModelFindFirstArgs>(args?: SelectSubset<T, VehicleModelFindFirstArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelFindFirstOrThrowArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleModelFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleModels
     * const vehicleModels = await prisma.vehicleModel.findMany()
     * 
     * // Get first 10 VehicleModels
     * const vehicleModels = await prisma.vehicleModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleModelWithIdOnly = await prisma.vehicleModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleModelFindManyArgs>(args?: SelectSubset<T, VehicleModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleModel.
     * @param {VehicleModelCreateArgs} args - Arguments to create a VehicleModel.
     * @example
     * // Create one VehicleModel
     * const VehicleModel = await prisma.vehicleModel.create({
     *   data: {
     *     // ... data to create a VehicleModel
     *   }
     * })
     * 
     */
    create<T extends VehicleModelCreateArgs>(args: SelectSubset<T, VehicleModelCreateArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleModels.
     * @param {VehicleModelCreateManyArgs} args - Arguments to create many VehicleModels.
     * @example
     * // Create many VehicleModels
     * const vehicleModel = await prisma.vehicleModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleModelCreateManyArgs>(args?: SelectSubset<T, VehicleModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleModels and returns the data saved in the database.
     * @param {VehicleModelCreateManyAndReturnArgs} args - Arguments to create many VehicleModels.
     * @example
     * // Create many VehicleModels
     * const vehicleModel = await prisma.vehicleModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleModels and only return the `id`
     * const vehicleModelWithIdOnly = await prisma.vehicleModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleModelCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleModel.
     * @param {VehicleModelDeleteArgs} args - Arguments to delete one VehicleModel.
     * @example
     * // Delete one VehicleModel
     * const VehicleModel = await prisma.vehicleModel.delete({
     *   where: {
     *     // ... filter to delete one VehicleModel
     *   }
     * })
     * 
     */
    delete<T extends VehicleModelDeleteArgs>(args: SelectSubset<T, VehicleModelDeleteArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleModel.
     * @param {VehicleModelUpdateArgs} args - Arguments to update one VehicleModel.
     * @example
     * // Update one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleModelUpdateArgs>(args: SelectSubset<T, VehicleModelUpdateArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleModels.
     * @param {VehicleModelDeleteManyArgs} args - Arguments to filter VehicleModels to delete.
     * @example
     * // Delete a few VehicleModels
     * const { count } = await prisma.vehicleModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleModelDeleteManyArgs>(args?: SelectSubset<T, VehicleModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleModels
     * const vehicleModel = await prisma.vehicleModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleModelUpdateManyArgs>(args: SelectSubset<T, VehicleModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleModels and returns the data updated in the database.
     * @param {VehicleModelUpdateManyAndReturnArgs} args - Arguments to update many VehicleModels.
     * @example
     * // Update many VehicleModels
     * const vehicleModel = await prisma.vehicleModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleModels and only return the `id`
     * const vehicleModelWithIdOnly = await prisma.vehicleModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleModelUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleModel.
     * @param {VehicleModelUpsertArgs} args - Arguments to update or create a VehicleModel.
     * @example
     * // Update or create a VehicleModel
     * const vehicleModel = await prisma.vehicleModel.upsert({
     *   create: {
     *     // ... data to create a VehicleModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleModel we want to update
     *   }
     * })
     */
    upsert<T extends VehicleModelUpsertArgs>(args: SelectSubset<T, VehicleModelUpsertArgs<ExtArgs>>): Prisma__VehicleModelClient<$Result.GetResult<Prisma.$VehicleModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelCountArgs} args - Arguments to filter VehicleModels to count.
     * @example
     * // Count the number of VehicleModels
     * const count = await prisma.vehicleModel.count({
     *   where: {
     *     // ... the filter for the VehicleModels we want to count
     *   }
     * })
    **/
    count<T extends VehicleModelCountArgs>(
      args?: Subset<T, VehicleModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleModelAggregateArgs>(args: Subset<T, VehicleModelAggregateArgs>): Prisma.PrismaPromise<GetVehicleModelAggregateType<T>>

    /**
     * Group by VehicleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleModelGroupByArgs['orderBy'] }
        : { orderBy?: VehicleModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleModel model
   */
  readonly fields: VehicleModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehciles<T extends VehicleModel$vehcilesArgs<ExtArgs> = {}>(args?: Subset<T, VehicleModel$vehcilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleModel model
   */
  interface VehicleModelFieldRefs {
    readonly id: FieldRef<"VehicleModel", 'Int'>
    readonly name: FieldRef<"VehicleModel", 'String'>
    readonly brandId: FieldRef<"VehicleModel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VehicleModel findUnique
   */
  export type VehicleModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * Filter, which VehicleModel to fetch.
     */
    where: VehicleModelWhereUniqueInput
  }

  /**
   * VehicleModel findUniqueOrThrow
   */
  export type VehicleModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * Filter, which VehicleModel to fetch.
     */
    where: VehicleModelWhereUniqueInput
  }

  /**
   * VehicleModel findFirst
   */
  export type VehicleModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * Filter, which VehicleModel to fetch.
     */
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     */
    orderBy?: VehicleModelOrderByWithRelationInput | VehicleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleModels.
     */
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleModels.
     */
    distinct?: VehicleModelScalarFieldEnum | VehicleModelScalarFieldEnum[]
  }

  /**
   * VehicleModel findFirstOrThrow
   */
  export type VehicleModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * Filter, which VehicleModel to fetch.
     */
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     */
    orderBy?: VehicleModelOrderByWithRelationInput | VehicleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleModels.
     */
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleModels.
     */
    distinct?: VehicleModelScalarFieldEnum | VehicleModelScalarFieldEnum[]
  }

  /**
   * VehicleModel findMany
   */
  export type VehicleModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * Filter, which VehicleModels to fetch.
     */
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     */
    orderBy?: VehicleModelOrderByWithRelationInput | VehicleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleModels.
     */
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     */
    skip?: number
    distinct?: VehicleModelScalarFieldEnum | VehicleModelScalarFieldEnum[]
  }

  /**
   * VehicleModel create
   */
  export type VehicleModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleModel.
     */
    data: XOR<VehicleModelCreateInput, VehicleModelUncheckedCreateInput>
  }

  /**
   * VehicleModel createMany
   */
  export type VehicleModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleModels.
     */
    data: VehicleModelCreateManyInput | VehicleModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleModel createManyAndReturn
   */
  export type VehicleModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleModels.
     */
    data: VehicleModelCreateManyInput | VehicleModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleModel update
   */
  export type VehicleModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleModel.
     */
    data: XOR<VehicleModelUpdateInput, VehicleModelUncheckedUpdateInput>
    /**
     * Choose, which VehicleModel to update.
     */
    where: VehicleModelWhereUniqueInput
  }

  /**
   * VehicleModel updateMany
   */
  export type VehicleModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleModels.
     */
    data: XOR<VehicleModelUpdateManyMutationInput, VehicleModelUncheckedUpdateManyInput>
    /**
     * Filter which VehicleModels to update
     */
    where?: VehicleModelWhereInput
    /**
     * Limit how many VehicleModels to update.
     */
    limit?: number
  }

  /**
   * VehicleModel updateManyAndReturn
   */
  export type VehicleModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * The data used to update VehicleModels.
     */
    data: XOR<VehicleModelUpdateManyMutationInput, VehicleModelUncheckedUpdateManyInput>
    /**
     * Filter which VehicleModels to update
     */
    where?: VehicleModelWhereInput
    /**
     * Limit how many VehicleModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleModel upsert
   */
  export type VehicleModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleModel to update in case it exists.
     */
    where: VehicleModelWhereUniqueInput
    /**
     * In case the VehicleModel found by the `where` argument doesn't exist, create a new VehicleModel with this data.
     */
    create: XOR<VehicleModelCreateInput, VehicleModelUncheckedCreateInput>
    /**
     * In case the VehicleModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleModelUpdateInput, VehicleModelUncheckedUpdateInput>
  }

  /**
   * VehicleModel delete
   */
  export type VehicleModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
    /**
     * Filter which VehicleModel to delete.
     */
    where: VehicleModelWhereUniqueInput
  }

  /**
   * VehicleModel deleteMany
   */
  export type VehicleModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleModels to delete
     */
    where?: VehicleModelWhereInput
    /**
     * Limit how many VehicleModels to delete.
     */
    limit?: number
  }

  /**
   * VehicleModel.vehciles
   */
  export type VehicleModel$vehcilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * VehicleModel without action
   */
  export type VehicleModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleModel
     */
    select?: VehicleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleModel
     */
    omit?: VehicleModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleModelInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    vehicleId: number | null
    partTypeId: number | null
    partModelId: number | null
    warehouseId: number | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    vehicleId: number | null
    partTypeId: number | null
    partModelId: number | null
    warehouseId: number | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    state: $Enums.State | null
    vehicleId: number | null
    partTypeId: number | null
    partModelId: number | null
    warehouseId: number | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    state: $Enums.State | null
    vehicleId: number | null
    partTypeId: number | null
    partModelId: number | null
    warehouseId: number | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    state: number
    vehicleId: number
    partTypeId: number
    partModelId: number
    warehouseId: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    vehicleId?: true
    partTypeId?: true
    partModelId?: true
    warehouseId?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    vehicleId?: true
    partTypeId?: true
    partModelId?: true
    warehouseId?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    state?: true
    vehicleId?: true
    partTypeId?: true
    partModelId?: true
    warehouseId?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    state?: true
    vehicleId?: true
    partTypeId?: true
    partModelId?: true
    warehouseId?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    state?: true
    vehicleId?: true
    partTypeId?: true
    partModelId?: true
    warehouseId?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    state: $Enums.State
    vehicleId: number | null
    partTypeId: number
    partModelId: number | null
    warehouseId: number | null
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    vehicleId?: boolean
    partTypeId?: boolean
    partModelId?: boolean
    warehouseId?: boolean
    vehicle?: boolean | Part$vehicleArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    partModel?: boolean | Part$partModelArgs<ExtArgs>
    warehouse?: boolean | Part$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    vehicleId?: boolean
    partTypeId?: boolean
    partModelId?: boolean
    warehouseId?: boolean
    vehicle?: boolean | Part$vehicleArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    partModel?: boolean | Part$partModelArgs<ExtArgs>
    warehouse?: boolean | Part$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    vehicleId?: boolean
    partTypeId?: boolean
    partModelId?: boolean
    warehouseId?: boolean
    vehicle?: boolean | Part$vehicleArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    partModel?: boolean | Part$partModelArgs<ExtArgs>
    warehouse?: boolean | Part$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    state?: boolean
    vehicleId?: boolean
    partTypeId?: boolean
    partModelId?: boolean
    warehouseId?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state" | "vehicleId" | "partTypeId" | "partModelId" | "warehouseId", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Part$vehicleArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    partModel?: boolean | Part$partModelArgs<ExtArgs>
    warehouse?: boolean | Part$warehouseArgs<ExtArgs>
  }
  export type PartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Part$vehicleArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    partModel?: boolean | Part$partModelArgs<ExtArgs>
    warehouse?: boolean | Part$warehouseArgs<ExtArgs>
  }
  export type PartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Part$vehicleArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    partModel?: boolean | Part$partModelArgs<ExtArgs>
    warehouse?: boolean | Part$warehouseArgs<ExtArgs>
  }

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      partType: Prisma.$PartTypePayload<ExtArgs>
      partModel: Prisma.$PartModelPayload<ExtArgs> | null
      warehouse: Prisma.$WarehousePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      state: $Enums.State
      vehicleId: number | null
      partTypeId: number
      partModelId: number | null
      warehouseId: number | null
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends Part$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Part$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    partType<T extends PartTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartTypeDefaultArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partModel<T extends Part$partModelArgs<ExtArgs> = {}>(args?: Subset<T, Part$partModelArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends Part$warehouseArgs<ExtArgs> = {}>(args?: Subset<T, Part$warehouseArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly state: FieldRef<"Part", 'State'>
    readonly vehicleId: FieldRef<"Part", 'Int'>
    readonly partTypeId: FieldRef<"Part", 'Int'>
    readonly partModelId: FieldRef<"Part", 'Int'>
    readonly warehouseId: FieldRef<"Part", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part.vehicle
   */
  export type Part$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Part.partModel
   */
  export type Part$partModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    where?: PartModelWhereInput
  }

  /**
   * Part.warehouse
   */
  export type Part$warehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Model PartType
   */

  export type AggregatePartType = {
    _count: PartTypeCountAggregateOutputType | null
    _avg: PartTypeAvgAggregateOutputType | null
    _sum: PartTypeSumAggregateOutputType | null
    _min: PartTypeMinAggregateOutputType | null
    _max: PartTypeMaxAggregateOutputType | null
  }

  export type PartTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type PartTypeSumAggregateOutputType = {
    id: number | null
  }

  export type PartTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PartTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PartTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PartTypeAvgAggregateInputType = {
    id?: true
  }

  export type PartTypeSumAggregateInputType = {
    id?: true
  }

  export type PartTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PartTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PartTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PartTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartType to aggregate.
     */
    where?: PartTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartTypes to fetch.
     */
    orderBy?: PartTypeOrderByWithRelationInput | PartTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartTypes
    **/
    _count?: true | PartTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartTypeMaxAggregateInputType
  }

  export type GetPartTypeAggregateType<T extends PartTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePartType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartType[P]>
      : GetScalarType<T[P], AggregatePartType[P]>
  }




  export type PartTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartTypeWhereInput
    orderBy?: PartTypeOrderByWithAggregationInput | PartTypeOrderByWithAggregationInput[]
    by: PartTypeScalarFieldEnum[] | PartTypeScalarFieldEnum
    having?: PartTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartTypeCountAggregateInputType | true
    _avg?: PartTypeAvgAggregateInputType
    _sum?: PartTypeSumAggregateInputType
    _min?: PartTypeMinAggregateInputType
    _max?: PartTypeMaxAggregateInputType
  }

  export type PartTypeGroupByOutputType = {
    id: number
    name: string
    _count: PartTypeCountAggregateOutputType | null
    _avg: PartTypeAvgAggregateOutputType | null
    _sum: PartTypeSumAggregateOutputType | null
    _min: PartTypeMinAggregateOutputType | null
    _max: PartTypeMaxAggregateOutputType | null
  }

  type GetPartTypeGroupByPayload<T extends PartTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PartTypeGroupByOutputType[P]>
        }
      >
    >


  export type PartTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parts?: boolean | PartType$partsArgs<ExtArgs>
    PartModel?: boolean | PartType$PartModelArgs<ExtArgs>
    _count?: boolean | PartTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partType"]>

  export type PartTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["partType"]>

  export type PartTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["partType"]>

  export type PartTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PartTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["partType"]>
  export type PartTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | PartType$partsArgs<ExtArgs>
    PartModel?: boolean | PartType$PartModelArgs<ExtArgs>
    _count?: boolean | PartTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PartTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PartTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartType"
    objects: {
      parts: Prisma.$PartPayload<ExtArgs>[]
      PartModel: Prisma.$PartModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["partType"]>
    composites: {}
  }

  type PartTypeGetPayload<S extends boolean | null | undefined | PartTypeDefaultArgs> = $Result.GetResult<Prisma.$PartTypePayload, S>

  type PartTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartTypeCountAggregateInputType | true
    }

  export interface PartTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartType'], meta: { name: 'PartType' } }
    /**
     * Find zero or one PartType that matches the filter.
     * @param {PartTypeFindUniqueArgs} args - Arguments to find a PartType
     * @example
     * // Get one PartType
     * const partType = await prisma.partType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartTypeFindUniqueArgs>(args: SelectSubset<T, PartTypeFindUniqueArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartTypeFindUniqueOrThrowArgs} args - Arguments to find a PartType
     * @example
     * // Get one PartType
     * const partType = await prisma.partType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PartTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeFindFirstArgs} args - Arguments to find a PartType
     * @example
     * // Get one PartType
     * const partType = await prisma.partType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartTypeFindFirstArgs>(args?: SelectSubset<T, PartTypeFindFirstArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeFindFirstOrThrowArgs} args - Arguments to find a PartType
     * @example
     * // Get one PartType
     * const partType = await prisma.partType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PartTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartTypes
     * const partTypes = await prisma.partType.findMany()
     * 
     * // Get first 10 PartTypes
     * const partTypes = await prisma.partType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partTypeWithIdOnly = await prisma.partType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartTypeFindManyArgs>(args?: SelectSubset<T, PartTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartType.
     * @param {PartTypeCreateArgs} args - Arguments to create a PartType.
     * @example
     * // Create one PartType
     * const PartType = await prisma.partType.create({
     *   data: {
     *     // ... data to create a PartType
     *   }
     * })
     * 
     */
    create<T extends PartTypeCreateArgs>(args: SelectSubset<T, PartTypeCreateArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartTypes.
     * @param {PartTypeCreateManyArgs} args - Arguments to create many PartTypes.
     * @example
     * // Create many PartTypes
     * const partType = await prisma.partType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartTypeCreateManyArgs>(args?: SelectSubset<T, PartTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartTypes and returns the data saved in the database.
     * @param {PartTypeCreateManyAndReturnArgs} args - Arguments to create many PartTypes.
     * @example
     * // Create many PartTypes
     * const partType = await prisma.partType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartTypes and only return the `id`
     * const partTypeWithIdOnly = await prisma.partType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PartTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartType.
     * @param {PartTypeDeleteArgs} args - Arguments to delete one PartType.
     * @example
     * // Delete one PartType
     * const PartType = await prisma.partType.delete({
     *   where: {
     *     // ... filter to delete one PartType
     *   }
     * })
     * 
     */
    delete<T extends PartTypeDeleteArgs>(args: SelectSubset<T, PartTypeDeleteArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartType.
     * @param {PartTypeUpdateArgs} args - Arguments to update one PartType.
     * @example
     * // Update one PartType
     * const partType = await prisma.partType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartTypeUpdateArgs>(args: SelectSubset<T, PartTypeUpdateArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartTypes.
     * @param {PartTypeDeleteManyArgs} args - Arguments to filter PartTypes to delete.
     * @example
     * // Delete a few PartTypes
     * const { count } = await prisma.partType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartTypeDeleteManyArgs>(args?: SelectSubset<T, PartTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartTypes
     * const partType = await prisma.partType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartTypeUpdateManyArgs>(args: SelectSubset<T, PartTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartTypes and returns the data updated in the database.
     * @param {PartTypeUpdateManyAndReturnArgs} args - Arguments to update many PartTypes.
     * @example
     * // Update many PartTypes
     * const partType = await prisma.partType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartTypes and only return the `id`
     * const partTypeWithIdOnly = await prisma.partType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PartTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartType.
     * @param {PartTypeUpsertArgs} args - Arguments to update or create a PartType.
     * @example
     * // Update or create a PartType
     * const partType = await prisma.partType.upsert({
     *   create: {
     *     // ... data to create a PartType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartType we want to update
     *   }
     * })
     */
    upsert<T extends PartTypeUpsertArgs>(args: SelectSubset<T, PartTypeUpsertArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeCountArgs} args - Arguments to filter PartTypes to count.
     * @example
     * // Count the number of PartTypes
     * const count = await prisma.partType.count({
     *   where: {
     *     // ... the filter for the PartTypes we want to count
     *   }
     * })
    **/
    count<T extends PartTypeCountArgs>(
      args?: Subset<T, PartTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartTypeAggregateArgs>(args: Subset<T, PartTypeAggregateArgs>): Prisma.PrismaPromise<GetPartTypeAggregateType<T>>

    /**
     * Group by PartType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartTypeGroupByArgs['orderBy'] }
        : { orderBy?: PartTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartType model
   */
  readonly fields: PartTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parts<T extends PartType$partsArgs<ExtArgs> = {}>(args?: Subset<T, PartType$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PartModel<T extends PartType$PartModelArgs<ExtArgs> = {}>(args?: Subset<T, PartType$PartModelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartType model
   */
  interface PartTypeFieldRefs {
    readonly id: FieldRef<"PartType", 'Int'>
    readonly name: FieldRef<"PartType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PartType findUnique
   */
  export type PartTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * Filter, which PartType to fetch.
     */
    where: PartTypeWhereUniqueInput
  }

  /**
   * PartType findUniqueOrThrow
   */
  export type PartTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * Filter, which PartType to fetch.
     */
    where: PartTypeWhereUniqueInput
  }

  /**
   * PartType findFirst
   */
  export type PartTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * Filter, which PartType to fetch.
     */
    where?: PartTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartTypes to fetch.
     */
    orderBy?: PartTypeOrderByWithRelationInput | PartTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartTypes.
     */
    cursor?: PartTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartTypes.
     */
    distinct?: PartTypeScalarFieldEnum | PartTypeScalarFieldEnum[]
  }

  /**
   * PartType findFirstOrThrow
   */
  export type PartTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * Filter, which PartType to fetch.
     */
    where?: PartTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartTypes to fetch.
     */
    orderBy?: PartTypeOrderByWithRelationInput | PartTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartTypes.
     */
    cursor?: PartTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartTypes.
     */
    distinct?: PartTypeScalarFieldEnum | PartTypeScalarFieldEnum[]
  }

  /**
   * PartType findMany
   */
  export type PartTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * Filter, which PartTypes to fetch.
     */
    where?: PartTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartTypes to fetch.
     */
    orderBy?: PartTypeOrderByWithRelationInput | PartTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartTypes.
     */
    cursor?: PartTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartTypes.
     */
    skip?: number
    distinct?: PartTypeScalarFieldEnum | PartTypeScalarFieldEnum[]
  }

  /**
   * PartType create
   */
  export type PartTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PartType.
     */
    data: XOR<PartTypeCreateInput, PartTypeUncheckedCreateInput>
  }

  /**
   * PartType createMany
   */
  export type PartTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartTypes.
     */
    data: PartTypeCreateManyInput | PartTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartType createManyAndReturn
   */
  export type PartTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PartTypes.
     */
    data: PartTypeCreateManyInput | PartTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartType update
   */
  export type PartTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PartType.
     */
    data: XOR<PartTypeUpdateInput, PartTypeUncheckedUpdateInput>
    /**
     * Choose, which PartType to update.
     */
    where: PartTypeWhereUniqueInput
  }

  /**
   * PartType updateMany
   */
  export type PartTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartTypes.
     */
    data: XOR<PartTypeUpdateManyMutationInput, PartTypeUncheckedUpdateManyInput>
    /**
     * Filter which PartTypes to update
     */
    where?: PartTypeWhereInput
    /**
     * Limit how many PartTypes to update.
     */
    limit?: number
  }

  /**
   * PartType updateManyAndReturn
   */
  export type PartTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * The data used to update PartTypes.
     */
    data: XOR<PartTypeUpdateManyMutationInput, PartTypeUncheckedUpdateManyInput>
    /**
     * Filter which PartTypes to update
     */
    where?: PartTypeWhereInput
    /**
     * Limit how many PartTypes to update.
     */
    limit?: number
  }

  /**
   * PartType upsert
   */
  export type PartTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PartType to update in case it exists.
     */
    where: PartTypeWhereUniqueInput
    /**
     * In case the PartType found by the `where` argument doesn't exist, create a new PartType with this data.
     */
    create: XOR<PartTypeCreateInput, PartTypeUncheckedCreateInput>
    /**
     * In case the PartType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartTypeUpdateInput, PartTypeUncheckedUpdateInput>
  }

  /**
   * PartType delete
   */
  export type PartTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
    /**
     * Filter which PartType to delete.
     */
    where: PartTypeWhereUniqueInput
  }

  /**
   * PartType deleteMany
   */
  export type PartTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartTypes to delete
     */
    where?: PartTypeWhereInput
    /**
     * Limit how many PartTypes to delete.
     */
    limit?: number
  }

  /**
   * PartType.parts
   */
  export type PartType$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * PartType.PartModel
   */
  export type PartType$PartModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    where?: PartModelWhereInput
    orderBy?: PartModelOrderByWithRelationInput | PartModelOrderByWithRelationInput[]
    cursor?: PartModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartModelScalarFieldEnum | PartModelScalarFieldEnum[]
  }

  /**
   * PartType without action
   */
  export type PartTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartType
     */
    select?: PartTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartType
     */
    omit?: PartTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartTypeInclude<ExtArgs> | null
  }


  /**
   * Model PartModel
   */

  export type AggregatePartModel = {
    _count: PartModelCountAggregateOutputType | null
    _avg: PartModelAvgAggregateOutputType | null
    _sum: PartModelSumAggregateOutputType | null
    _min: PartModelMinAggregateOutputType | null
    _max: PartModelMaxAggregateOutputType | null
  }

  export type PartModelAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
    partTypeId: number | null
  }

  export type PartModelSumAggregateOutputType = {
    id: number | null
    brandId: number | null
    partTypeId: number | null
  }

  export type PartModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    brandId: number | null
    partTypeId: number | null
  }

  export type PartModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    brandId: number | null
    partTypeId: number | null
  }

  export type PartModelCountAggregateOutputType = {
    id: number
    name: number
    code: number
    brandId: number
    partTypeId: number
    _all: number
  }


  export type PartModelAvgAggregateInputType = {
    id?: true
    brandId?: true
    partTypeId?: true
  }

  export type PartModelSumAggregateInputType = {
    id?: true
    brandId?: true
    partTypeId?: true
  }

  export type PartModelMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    brandId?: true
    partTypeId?: true
  }

  export type PartModelMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    brandId?: true
    partTypeId?: true
  }

  export type PartModelCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    brandId?: true
    partTypeId?: true
    _all?: true
  }

  export type PartModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartModel to aggregate.
     */
    where?: PartModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartModels to fetch.
     */
    orderBy?: PartModelOrderByWithRelationInput | PartModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartModels
    **/
    _count?: true | PartModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartModelMaxAggregateInputType
  }

  export type GetPartModelAggregateType<T extends PartModelAggregateArgs> = {
        [P in keyof T & keyof AggregatePartModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartModel[P]>
      : GetScalarType<T[P], AggregatePartModel[P]>
  }




  export type PartModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartModelWhereInput
    orderBy?: PartModelOrderByWithAggregationInput | PartModelOrderByWithAggregationInput[]
    by: PartModelScalarFieldEnum[] | PartModelScalarFieldEnum
    having?: PartModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartModelCountAggregateInputType | true
    _avg?: PartModelAvgAggregateInputType
    _sum?: PartModelSumAggregateInputType
    _min?: PartModelMinAggregateInputType
    _max?: PartModelMaxAggregateInputType
  }

  export type PartModelGroupByOutputType = {
    id: number
    name: string
    code: string
    brandId: number
    partTypeId: number
    _count: PartModelCountAggregateOutputType | null
    _avg: PartModelAvgAggregateOutputType | null
    _sum: PartModelSumAggregateOutputType | null
    _min: PartModelMinAggregateOutputType | null
    _max: PartModelMaxAggregateOutputType | null
  }

  type GetPartModelGroupByPayload<T extends PartModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartModelGroupByOutputType[P]>
            : GetScalarType<T[P], PartModelGroupByOutputType[P]>
        }
      >
    >


  export type PartModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    brandId?: boolean
    partTypeId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    parts?: boolean | PartModel$partsArgs<ExtArgs>
    _count?: boolean | PartModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partModel"]>

  export type PartModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    brandId?: boolean
    partTypeId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partModel"]>

  export type PartModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    brandId?: boolean
    partTypeId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partModel"]>

  export type PartModelSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    brandId?: boolean
    partTypeId?: boolean
  }

  export type PartModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "brandId" | "partTypeId", ExtArgs["result"]["partModel"]>
  export type PartModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
    parts?: boolean | PartModel$partsArgs<ExtArgs>
    _count?: boolean | PartModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
  }
  export type PartModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    partType?: boolean | PartTypeDefaultArgs<ExtArgs>
  }

  export type $PartModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartModel"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      partType: Prisma.$PartTypePayload<ExtArgs>
      parts: Prisma.$PartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      brandId: number
      partTypeId: number
    }, ExtArgs["result"]["partModel"]>
    composites: {}
  }

  type PartModelGetPayload<S extends boolean | null | undefined | PartModelDefaultArgs> = $Result.GetResult<Prisma.$PartModelPayload, S>

  type PartModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartModelCountAggregateInputType | true
    }

  export interface PartModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartModel'], meta: { name: 'PartModel' } }
    /**
     * Find zero or one PartModel that matches the filter.
     * @param {PartModelFindUniqueArgs} args - Arguments to find a PartModel
     * @example
     * // Get one PartModel
     * const partModel = await prisma.partModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartModelFindUniqueArgs>(args: SelectSubset<T, PartModelFindUniqueArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartModelFindUniqueOrThrowArgs} args - Arguments to find a PartModel
     * @example
     * // Get one PartModel
     * const partModel = await prisma.partModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartModelFindUniqueOrThrowArgs>(args: SelectSubset<T, PartModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelFindFirstArgs} args - Arguments to find a PartModel
     * @example
     * // Get one PartModel
     * const partModel = await prisma.partModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartModelFindFirstArgs>(args?: SelectSubset<T, PartModelFindFirstArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelFindFirstOrThrowArgs} args - Arguments to find a PartModel
     * @example
     * // Get one PartModel
     * const partModel = await prisma.partModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartModelFindFirstOrThrowArgs>(args?: SelectSubset<T, PartModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartModels
     * const partModels = await prisma.partModel.findMany()
     * 
     * // Get first 10 PartModels
     * const partModels = await prisma.partModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partModelWithIdOnly = await prisma.partModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartModelFindManyArgs>(args?: SelectSubset<T, PartModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartModel.
     * @param {PartModelCreateArgs} args - Arguments to create a PartModel.
     * @example
     * // Create one PartModel
     * const PartModel = await prisma.partModel.create({
     *   data: {
     *     // ... data to create a PartModel
     *   }
     * })
     * 
     */
    create<T extends PartModelCreateArgs>(args: SelectSubset<T, PartModelCreateArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartModels.
     * @param {PartModelCreateManyArgs} args - Arguments to create many PartModels.
     * @example
     * // Create many PartModels
     * const partModel = await prisma.partModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartModelCreateManyArgs>(args?: SelectSubset<T, PartModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartModels and returns the data saved in the database.
     * @param {PartModelCreateManyAndReturnArgs} args - Arguments to create many PartModels.
     * @example
     * // Create many PartModels
     * const partModel = await prisma.partModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartModels and only return the `id`
     * const partModelWithIdOnly = await prisma.partModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartModelCreateManyAndReturnArgs>(args?: SelectSubset<T, PartModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PartModel.
     * @param {PartModelDeleteArgs} args - Arguments to delete one PartModel.
     * @example
     * // Delete one PartModel
     * const PartModel = await prisma.partModel.delete({
     *   where: {
     *     // ... filter to delete one PartModel
     *   }
     * })
     * 
     */
    delete<T extends PartModelDeleteArgs>(args: SelectSubset<T, PartModelDeleteArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartModel.
     * @param {PartModelUpdateArgs} args - Arguments to update one PartModel.
     * @example
     * // Update one PartModel
     * const partModel = await prisma.partModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartModelUpdateArgs>(args: SelectSubset<T, PartModelUpdateArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartModels.
     * @param {PartModelDeleteManyArgs} args - Arguments to filter PartModels to delete.
     * @example
     * // Delete a few PartModels
     * const { count } = await prisma.partModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartModelDeleteManyArgs>(args?: SelectSubset<T, PartModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartModels
     * const partModel = await prisma.partModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartModelUpdateManyArgs>(args: SelectSubset<T, PartModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartModels and returns the data updated in the database.
     * @param {PartModelUpdateManyAndReturnArgs} args - Arguments to update many PartModels.
     * @example
     * // Update many PartModels
     * const partModel = await prisma.partModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartModels and only return the `id`
     * const partModelWithIdOnly = await prisma.partModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartModelUpdateManyAndReturnArgs>(args: SelectSubset<T, PartModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PartModel.
     * @param {PartModelUpsertArgs} args - Arguments to update or create a PartModel.
     * @example
     * // Update or create a PartModel
     * const partModel = await prisma.partModel.upsert({
     *   create: {
     *     // ... data to create a PartModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartModel we want to update
     *   }
     * })
     */
    upsert<T extends PartModelUpsertArgs>(args: SelectSubset<T, PartModelUpsertArgs<ExtArgs>>): Prisma__PartModelClient<$Result.GetResult<Prisma.$PartModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelCountArgs} args - Arguments to filter PartModels to count.
     * @example
     * // Count the number of PartModels
     * const count = await prisma.partModel.count({
     *   where: {
     *     // ... the filter for the PartModels we want to count
     *   }
     * })
    **/
    count<T extends PartModelCountArgs>(
      args?: Subset<T, PartModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartModelAggregateArgs>(args: Subset<T, PartModelAggregateArgs>): Prisma.PrismaPromise<GetPartModelAggregateType<T>>

    /**
     * Group by PartModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartModelGroupByArgs['orderBy'] }
        : { orderBy?: PartModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartModel model
   */
  readonly fields: PartModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partType<T extends PartTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartTypeDefaultArgs<ExtArgs>>): Prisma__PartTypeClient<$Result.GetResult<Prisma.$PartTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parts<T extends PartModel$partsArgs<ExtArgs> = {}>(args?: Subset<T, PartModel$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartModel model
   */
  interface PartModelFieldRefs {
    readonly id: FieldRef<"PartModel", 'Int'>
    readonly name: FieldRef<"PartModel", 'String'>
    readonly code: FieldRef<"PartModel", 'String'>
    readonly brandId: FieldRef<"PartModel", 'Int'>
    readonly partTypeId: FieldRef<"PartModel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PartModel findUnique
   */
  export type PartModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * Filter, which PartModel to fetch.
     */
    where: PartModelWhereUniqueInput
  }

  /**
   * PartModel findUniqueOrThrow
   */
  export type PartModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * Filter, which PartModel to fetch.
     */
    where: PartModelWhereUniqueInput
  }

  /**
   * PartModel findFirst
   */
  export type PartModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * Filter, which PartModel to fetch.
     */
    where?: PartModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartModels to fetch.
     */
    orderBy?: PartModelOrderByWithRelationInput | PartModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartModels.
     */
    cursor?: PartModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartModels.
     */
    distinct?: PartModelScalarFieldEnum | PartModelScalarFieldEnum[]
  }

  /**
   * PartModel findFirstOrThrow
   */
  export type PartModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * Filter, which PartModel to fetch.
     */
    where?: PartModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartModels to fetch.
     */
    orderBy?: PartModelOrderByWithRelationInput | PartModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartModels.
     */
    cursor?: PartModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartModels.
     */
    distinct?: PartModelScalarFieldEnum | PartModelScalarFieldEnum[]
  }

  /**
   * PartModel findMany
   */
  export type PartModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * Filter, which PartModels to fetch.
     */
    where?: PartModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartModels to fetch.
     */
    orderBy?: PartModelOrderByWithRelationInput | PartModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartModels.
     */
    cursor?: PartModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartModels.
     */
    skip?: number
    distinct?: PartModelScalarFieldEnum | PartModelScalarFieldEnum[]
  }

  /**
   * PartModel create
   */
  export type PartModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * The data needed to create a PartModel.
     */
    data: XOR<PartModelCreateInput, PartModelUncheckedCreateInput>
  }

  /**
   * PartModel createMany
   */
  export type PartModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartModels.
     */
    data: PartModelCreateManyInput | PartModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartModel createManyAndReturn
   */
  export type PartModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * The data used to create many PartModels.
     */
    data: PartModelCreateManyInput | PartModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartModel update
   */
  export type PartModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * The data needed to update a PartModel.
     */
    data: XOR<PartModelUpdateInput, PartModelUncheckedUpdateInput>
    /**
     * Choose, which PartModel to update.
     */
    where: PartModelWhereUniqueInput
  }

  /**
   * PartModel updateMany
   */
  export type PartModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartModels.
     */
    data: XOR<PartModelUpdateManyMutationInput, PartModelUncheckedUpdateManyInput>
    /**
     * Filter which PartModels to update
     */
    where?: PartModelWhereInput
    /**
     * Limit how many PartModels to update.
     */
    limit?: number
  }

  /**
   * PartModel updateManyAndReturn
   */
  export type PartModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * The data used to update PartModels.
     */
    data: XOR<PartModelUpdateManyMutationInput, PartModelUncheckedUpdateManyInput>
    /**
     * Filter which PartModels to update
     */
    where?: PartModelWhereInput
    /**
     * Limit how many PartModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartModel upsert
   */
  export type PartModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * The filter to search for the PartModel to update in case it exists.
     */
    where: PartModelWhereUniqueInput
    /**
     * In case the PartModel found by the `where` argument doesn't exist, create a new PartModel with this data.
     */
    create: XOR<PartModelCreateInput, PartModelUncheckedCreateInput>
    /**
     * In case the PartModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartModelUpdateInput, PartModelUncheckedUpdateInput>
  }

  /**
   * PartModel delete
   */
  export type PartModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
    /**
     * Filter which PartModel to delete.
     */
    where: PartModelWhereUniqueInput
  }

  /**
   * PartModel deleteMany
   */
  export type PartModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartModels to delete
     */
    where?: PartModelWhereInput
    /**
     * Limit how many PartModels to delete.
     */
    limit?: number
  }

  /**
   * PartModel.parts
   */
  export type PartModel$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * PartModel without action
   */
  export type PartModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartModel
     */
    select?: PartModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartModel
     */
    omit?: PartModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartModelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    serialNumber: 'serialNumber',
    code: 'code',
    vehicleModelId: 'vehicleModelId',
    warehouseId: 'warehouseId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const VehicleModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandId: 'brandId'
  };

  export type VehicleModelScalarFieldEnum = (typeof VehicleModelScalarFieldEnum)[keyof typeof VehicleModelScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    state: 'state',
    vehicleId: 'vehicleId',
    partTypeId: 'partTypeId',
    partModelId: 'partModelId',
    warehouseId: 'warehouseId'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const PartTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PartTypeScalarFieldEnum = (typeof PartTypeScalarFieldEnum)[keyof typeof PartTypeScalarFieldEnum]


  export const PartModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    brandId: 'brandId',
    partTypeId: 'partTypeId'
  };

  export type PartModelScalarFieldEnum = (typeof PartModelScalarFieldEnum)[keyof typeof PartModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'State'
   */
  export type EnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State'>
    


  /**
   * Reference to a field of type 'State[]'
   */
  export type ListEnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    vehicles?: VehicleListRelationFilter
    parts?: PartListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    parts?: PartOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    vehicles?: VehicleListRelationFilter
    parts?: PartListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    name?: StringFilter<"Brand"> | string
    partModels?: PartModelListRelationFilter
    vehicleModels?: VehicleModelListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    partModels?: PartModelOrderByRelationAggregateInput
    vehicleModels?: VehicleModelOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringFilter<"Brand"> | string
    partModels?: PartModelListRelationFilter
    vehicleModels?: VehicleModelListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    name?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    serialNumber?: StringFilter<"Vehicle"> | string
    code?: StringFilter<"Vehicle"> | string
    vehicleModelId?: IntFilter<"Vehicle"> | number
    warehouseId?: IntFilter<"Vehicle"> | number
    vehicleModel?: XOR<VehicleModelScalarRelationFilter, VehicleModelWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    parts?: PartListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    code?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
    vehicleModel?: VehicleModelOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    parts?: PartOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    serialNumber?: StringFilter<"Vehicle"> | string
    vehicleModelId?: IntFilter<"Vehicle"> | number
    warehouseId?: IntFilter<"Vehicle"> | number
    vehicleModel?: XOR<VehicleModelScalarRelationFilter, VehicleModelWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    parts?: PartListRelationFilter
  }, "id" | "code">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    code?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    serialNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    code?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleModelId?: IntWithAggregatesFilter<"Vehicle"> | number
    warehouseId?: IntWithAggregatesFilter<"Vehicle"> | number
  }

  export type VehicleModelWhereInput = {
    AND?: VehicleModelWhereInput | VehicleModelWhereInput[]
    OR?: VehicleModelWhereInput[]
    NOT?: VehicleModelWhereInput | VehicleModelWhereInput[]
    id?: IntFilter<"VehicleModel"> | number
    name?: StringFilter<"VehicleModel"> | string
    brandId?: IntFilter<"VehicleModel"> | number
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    vehciles?: VehicleListRelationFilter
  }

  export type VehicleModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    brand?: BrandOrderByWithRelationInput
    vehciles?: VehicleOrderByRelationAggregateInput
  }

  export type VehicleModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VehicleModelWhereInput | VehicleModelWhereInput[]
    OR?: VehicleModelWhereInput[]
    NOT?: VehicleModelWhereInput | VehicleModelWhereInput[]
    name?: StringFilter<"VehicleModel"> | string
    brandId?: IntFilter<"VehicleModel"> | number
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    vehciles?: VehicleListRelationFilter
  }, "id">

  export type VehicleModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    _count?: VehicleModelCountOrderByAggregateInput
    _avg?: VehicleModelAvgOrderByAggregateInput
    _max?: VehicleModelMaxOrderByAggregateInput
    _min?: VehicleModelMinOrderByAggregateInput
    _sum?: VehicleModelSumOrderByAggregateInput
  }

  export type VehicleModelScalarWhereWithAggregatesInput = {
    AND?: VehicleModelScalarWhereWithAggregatesInput | VehicleModelScalarWhereWithAggregatesInput[]
    OR?: VehicleModelScalarWhereWithAggregatesInput[]
    NOT?: VehicleModelScalarWhereWithAggregatesInput | VehicleModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VehicleModel"> | number
    name?: StringWithAggregatesFilter<"VehicleModel"> | string
    brandId?: IntWithAggregatesFilter<"VehicleModel"> | number
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    state?: EnumStateFilter<"Part"> | $Enums.State
    vehicleId?: IntNullableFilter<"Part"> | number | null
    partTypeId?: IntFilter<"Part"> | number
    partModelId?: IntNullableFilter<"Part"> | number | null
    warehouseId?: IntNullableFilter<"Part"> | number | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    partType?: XOR<PartTypeScalarRelationFilter, PartTypeWhereInput>
    partModel?: XOR<PartModelNullableScalarRelationFilter, PartModelWhereInput> | null
    warehouse?: XOR<WarehouseNullableScalarRelationFilter, WarehouseWhereInput> | null
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrderInput | SortOrder
    warehouseId?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    partType?: PartTypeOrderByWithRelationInput
    partModel?: PartModelOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    state?: EnumStateFilter<"Part"> | $Enums.State
    vehicleId?: IntNullableFilter<"Part"> | number | null
    partTypeId?: IntFilter<"Part"> | number
    partModelId?: IntNullableFilter<"Part"> | number | null
    warehouseId?: IntNullableFilter<"Part"> | number | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    partType?: XOR<PartTypeScalarRelationFilter, PartTypeWhereInput>
    partModel?: XOR<PartModelNullableScalarRelationFilter, PartModelWhereInput> | null
    warehouse?: XOR<WarehouseNullableScalarRelationFilter, WarehouseWhereInput> | null
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrderInput | SortOrder
    warehouseId?: SortOrderInput | SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    state?: EnumStateWithAggregatesFilter<"Part"> | $Enums.State
    vehicleId?: IntNullableWithAggregatesFilter<"Part"> | number | null
    partTypeId?: IntWithAggregatesFilter<"Part"> | number
    partModelId?: IntNullableWithAggregatesFilter<"Part"> | number | null
    warehouseId?: IntNullableWithAggregatesFilter<"Part"> | number | null
  }

  export type PartTypeWhereInput = {
    AND?: PartTypeWhereInput | PartTypeWhereInput[]
    OR?: PartTypeWhereInput[]
    NOT?: PartTypeWhereInput | PartTypeWhereInput[]
    id?: IntFilter<"PartType"> | number
    name?: StringFilter<"PartType"> | string
    parts?: PartListRelationFilter
    PartModel?: PartModelListRelationFilter
  }

  export type PartTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parts?: PartOrderByRelationAggregateInput
    PartModel?: PartModelOrderByRelationAggregateInput
  }

  export type PartTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartTypeWhereInput | PartTypeWhereInput[]
    OR?: PartTypeWhereInput[]
    NOT?: PartTypeWhereInput | PartTypeWhereInput[]
    name?: StringFilter<"PartType"> | string
    parts?: PartListRelationFilter
    PartModel?: PartModelListRelationFilter
  }, "id">

  export type PartTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PartTypeCountOrderByAggregateInput
    _avg?: PartTypeAvgOrderByAggregateInput
    _max?: PartTypeMaxOrderByAggregateInput
    _min?: PartTypeMinOrderByAggregateInput
    _sum?: PartTypeSumOrderByAggregateInput
  }

  export type PartTypeScalarWhereWithAggregatesInput = {
    AND?: PartTypeScalarWhereWithAggregatesInput | PartTypeScalarWhereWithAggregatesInput[]
    OR?: PartTypeScalarWhereWithAggregatesInput[]
    NOT?: PartTypeScalarWhereWithAggregatesInput | PartTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartType"> | number
    name?: StringWithAggregatesFilter<"PartType"> | string
  }

  export type PartModelWhereInput = {
    AND?: PartModelWhereInput | PartModelWhereInput[]
    OR?: PartModelWhereInput[]
    NOT?: PartModelWhereInput | PartModelWhereInput[]
    id?: IntFilter<"PartModel"> | number
    name?: StringFilter<"PartModel"> | string
    code?: StringFilter<"PartModel"> | string
    brandId?: IntFilter<"PartModel"> | number
    partTypeId?: IntFilter<"PartModel"> | number
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    partType?: XOR<PartTypeScalarRelationFilter, PartTypeWhereInput>
    parts?: PartListRelationFilter
  }

  export type PartModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
    brand?: BrandOrderByWithRelationInput
    partType?: PartTypeOrderByWithRelationInput
    parts?: PartOrderByRelationAggregateInput
  }

  export type PartModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: PartModelWhereInput | PartModelWhereInput[]
    OR?: PartModelWhereInput[]
    NOT?: PartModelWhereInput | PartModelWhereInput[]
    name?: StringFilter<"PartModel"> | string
    brandId?: IntFilter<"PartModel"> | number
    partTypeId?: IntFilter<"PartModel"> | number
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    partType?: XOR<PartTypeScalarRelationFilter, PartTypeWhereInput>
    parts?: PartListRelationFilter
  }, "id" | "code">

  export type PartModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
    _count?: PartModelCountOrderByAggregateInput
    _avg?: PartModelAvgOrderByAggregateInput
    _max?: PartModelMaxOrderByAggregateInput
    _min?: PartModelMinOrderByAggregateInput
    _sum?: PartModelSumOrderByAggregateInput
  }

  export type PartModelScalarWhereWithAggregatesInput = {
    AND?: PartModelScalarWhereWithAggregatesInput | PartModelScalarWhereWithAggregatesInput[]
    OR?: PartModelScalarWhereWithAggregatesInput[]
    NOT?: PartModelScalarWhereWithAggregatesInput | PartModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartModel"> | number
    name?: StringWithAggregatesFilter<"PartModel"> | string
    code?: StringWithAggregatesFilter<"PartModel"> | string
    brandId?: IntWithAggregatesFilter<"PartModel"> | number
    partTypeId?: IntWithAggregatesFilter<"PartModel"> | number
  }

  export type WarehouseCreateInput = {
    name: string
    vehicles?: VehicleCreateNestedManyWithoutWarehouseInput
    parts?: PartCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutWarehouseInput
    parts?: PartUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUpdateManyWithoutWarehouseNestedInput
    parts?: PartUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutWarehouseNestedInput
    parts?: PartUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCreateInput = {
    name: string
    partModels?: PartModelCreateNestedManyWithoutBrandInput
    vehicleModels?: VehicleModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    partModels?: PartModelUncheckedCreateNestedManyWithoutBrandInput
    vehicleModels?: VehicleModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    partModels?: PartModelUpdateManyWithoutBrandNestedInput
    vehicleModels?: VehicleModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    partModels?: PartModelUncheckedUpdateManyWithoutBrandNestedInput
    vehicleModels?: VehicleModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    serialNumber: string
    code: string
    vehicleModel: VehicleModelCreateNestedOneWithoutVehcilesInput
    warehouse: WarehouseCreateNestedOneWithoutVehiclesInput
    parts?: PartCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    serialNumber: string
    code: string
    vehicleModelId: number
    warehouseId: number
    parts?: PartUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModel?: VehicleModelUpdateOneRequiredWithoutVehcilesNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutVehiclesNestedInput
    parts?: PartUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModelId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    serialNumber: string
    code: string
    vehicleModelId: number
    warehouseId: number
  }

  export type VehicleUpdateManyMutationInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModelId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleModelCreateInput = {
    name: string
    brand: BrandCreateNestedOneWithoutVehicleModelsInput
    vehciles?: VehicleCreateNestedManyWithoutVehicleModelInput
  }

  export type VehicleModelUncheckedCreateInput = {
    id?: number
    name: string
    brandId: number
    vehciles?: VehicleUncheckedCreateNestedManyWithoutVehicleModelInput
  }

  export type VehicleModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutVehicleModelsNestedInput
    vehciles?: VehicleUpdateManyWithoutVehicleModelNestedInput
  }

  export type VehicleModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    vehciles?: VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput
  }

  export type VehicleModelCreateManyInput = {
    id?: number
    name: string
    brandId: number
  }

  export type VehicleModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type PartCreateInput = {
    state: $Enums.State
    vehicle?: VehicleCreateNestedOneWithoutPartsInput
    partType: PartTypeCreateNestedOneWithoutPartsInput
    partModel?: PartModelCreateNestedOneWithoutPartsInput
    warehouse?: WarehouseCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partTypeId: number
    partModelId?: number | null
    warehouseId?: number | null
  }

  export type PartUpdateInput = {
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicle?: VehicleUpdateOneWithoutPartsNestedInput
    partType?: PartTypeUpdateOneRequiredWithoutPartsNestedInput
    partModel?: PartModelUpdateOneWithoutPartsNestedInput
    warehouse?: WarehouseUpdateOneWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partTypeId?: IntFieldUpdateOperationsInput | number
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartCreateManyInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partTypeId: number
    partModelId?: number | null
    warehouseId?: number | null
  }

  export type PartUpdateManyMutationInput = {
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partTypeId?: IntFieldUpdateOperationsInput | number
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartTypeCreateInput = {
    name: string
    parts?: PartCreateNestedManyWithoutPartTypeInput
    PartModel?: PartModelCreateNestedManyWithoutPartTypeInput
  }

  export type PartTypeUncheckedCreateInput = {
    id?: number
    name: string
    parts?: PartUncheckedCreateNestedManyWithoutPartTypeInput
    PartModel?: PartModelUncheckedCreateNestedManyWithoutPartTypeInput
  }

  export type PartTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    parts?: PartUpdateManyWithoutPartTypeNestedInput
    PartModel?: PartModelUpdateManyWithoutPartTypeNestedInput
  }

  export type PartTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parts?: PartUncheckedUpdateManyWithoutPartTypeNestedInput
    PartModel?: PartModelUncheckedUpdateManyWithoutPartTypeNestedInput
  }

  export type PartTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type PartTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PartTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PartModelCreateInput = {
    name: string
    code: string
    brand: BrandCreateNestedOneWithoutPartModelsInput
    partType: PartTypeCreateNestedOneWithoutPartModelInput
    parts?: PartCreateNestedManyWithoutPartModelInput
  }

  export type PartModelUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    brandId: number
    partTypeId: number
    parts?: PartUncheckedCreateNestedManyWithoutPartModelInput
  }

  export type PartModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutPartModelsNestedInput
    partType?: PartTypeUpdateOneRequiredWithoutPartModelNestedInput
    parts?: PartUpdateManyWithoutPartModelNestedInput
  }

  export type PartModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    partTypeId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutPartModelNestedInput
  }

  export type PartModelCreateManyInput = {
    id?: number
    name: string
    code: string
    brandId: number
    partTypeId: number
  }

  export type PartModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type PartModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    partTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type PartListRelationFilter = {
    every?: PartWhereInput
    some?: PartWhereInput
    none?: PartWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PartModelListRelationFilter = {
    every?: PartModelWhereInput
    some?: PartModelWhereInput
    none?: PartModelWhereInput
  }

  export type VehicleModelListRelationFilter = {
    every?: VehicleModelWhereInput
    some?: VehicleModelWhereInput
    none?: VehicleModelWhereInput
  }

  export type PartModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleModelScalarRelationFilter = {
    is?: VehicleModelWhereInput
    isNot?: VehicleModelWhereInput
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    code?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    code?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    code?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
    vehicleModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type VehicleModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
  }

  export type VehicleModelAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type VehicleModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
  }

  export type VehicleModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
  }

  export type VehicleModelSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type EnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type PartTypeScalarRelationFilter = {
    is?: PartTypeWhereInput
    isNot?: PartTypeWhereInput
  }

  export type PartModelNullableScalarRelationFilter = {
    is?: PartModelWhereInput | null
    isNot?: PartModelWhereInput | null
  }

  export type WarehouseNullableScalarRelationFilter = {
    is?: WarehouseWhereInput | null
    isNot?: WarehouseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    vehicleId?: SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    vehicleId?: SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    vehicleId?: SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    partTypeId?: SortOrder
    partModelId?: SortOrder
    warehouseId?: SortOrder
  }

  export type EnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PartTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PartTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PartTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PartTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PartTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PartModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
  }

  export type PartModelAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
  }

  export type PartModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
  }

  export type PartModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
  }

  export type PartModelSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    partTypeId?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<VehicleCreateWithoutWarehouseInput, VehicleUncheckedCreateWithoutWarehouseInput> | VehicleCreateWithoutWarehouseInput[] | VehicleUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutWarehouseInput | VehicleCreateOrConnectWithoutWarehouseInput[]
    createMany?: VehicleCreateManyWarehouseInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type PartCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<PartCreateWithoutWarehouseInput, PartUncheckedCreateWithoutWarehouseInput> | PartCreateWithoutWarehouseInput[] | PartUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: PartCreateOrConnectWithoutWarehouseInput | PartCreateOrConnectWithoutWarehouseInput[]
    createMany?: PartCreateManyWarehouseInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<VehicleCreateWithoutWarehouseInput, VehicleUncheckedCreateWithoutWarehouseInput> | VehicleCreateWithoutWarehouseInput[] | VehicleUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutWarehouseInput | VehicleCreateOrConnectWithoutWarehouseInput[]
    createMany?: VehicleCreateManyWarehouseInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<PartCreateWithoutWarehouseInput, PartUncheckedCreateWithoutWarehouseInput> | PartCreateWithoutWarehouseInput[] | PartUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: PartCreateOrConnectWithoutWarehouseInput | PartCreateOrConnectWithoutWarehouseInput[]
    createMany?: PartCreateManyWarehouseInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VehicleUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<VehicleCreateWithoutWarehouseInput, VehicleUncheckedCreateWithoutWarehouseInput> | VehicleCreateWithoutWarehouseInput[] | VehicleUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutWarehouseInput | VehicleCreateOrConnectWithoutWarehouseInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutWarehouseInput | VehicleUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: VehicleCreateManyWarehouseInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutWarehouseInput | VehicleUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutWarehouseInput | VehicleUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type PartUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<PartCreateWithoutWarehouseInput, PartUncheckedCreateWithoutWarehouseInput> | PartCreateWithoutWarehouseInput[] | PartUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: PartCreateOrConnectWithoutWarehouseInput | PartCreateOrConnectWithoutWarehouseInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutWarehouseInput | PartUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: PartCreateManyWarehouseInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutWarehouseInput | PartUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: PartUpdateManyWithWhereWithoutWarehouseInput | PartUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<VehicleCreateWithoutWarehouseInput, VehicleUncheckedCreateWithoutWarehouseInput> | VehicleCreateWithoutWarehouseInput[] | VehicleUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutWarehouseInput | VehicleCreateOrConnectWithoutWarehouseInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutWarehouseInput | VehicleUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: VehicleCreateManyWarehouseInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutWarehouseInput | VehicleUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutWarehouseInput | VehicleUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<PartCreateWithoutWarehouseInput, PartUncheckedCreateWithoutWarehouseInput> | PartCreateWithoutWarehouseInput[] | PartUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: PartCreateOrConnectWithoutWarehouseInput | PartCreateOrConnectWithoutWarehouseInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutWarehouseInput | PartUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: PartCreateManyWarehouseInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutWarehouseInput | PartUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: PartUpdateManyWithWhereWithoutWarehouseInput | PartUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartModelCreateNestedManyWithoutBrandInput = {
    create?: XOR<PartModelCreateWithoutBrandInput, PartModelUncheckedCreateWithoutBrandInput> | PartModelCreateWithoutBrandInput[] | PartModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutBrandInput | PartModelCreateOrConnectWithoutBrandInput[]
    createMany?: PartModelCreateManyBrandInputEnvelope
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
  }

  export type VehicleModelCreateNestedManyWithoutBrandInput = {
    create?: XOR<VehicleModelCreateWithoutBrandInput, VehicleModelUncheckedCreateWithoutBrandInput> | VehicleModelCreateWithoutBrandInput[] | VehicleModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: VehicleModelCreateOrConnectWithoutBrandInput | VehicleModelCreateOrConnectWithoutBrandInput[]
    createMany?: VehicleModelCreateManyBrandInputEnvelope
    connect?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
  }

  export type PartModelUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<PartModelCreateWithoutBrandInput, PartModelUncheckedCreateWithoutBrandInput> | PartModelCreateWithoutBrandInput[] | PartModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutBrandInput | PartModelCreateOrConnectWithoutBrandInput[]
    createMany?: PartModelCreateManyBrandInputEnvelope
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
  }

  export type VehicleModelUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<VehicleModelCreateWithoutBrandInput, VehicleModelUncheckedCreateWithoutBrandInput> | VehicleModelCreateWithoutBrandInput[] | VehicleModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: VehicleModelCreateOrConnectWithoutBrandInput | VehicleModelCreateOrConnectWithoutBrandInput[]
    createMany?: VehicleModelCreateManyBrandInputEnvelope
    connect?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
  }

  export type PartModelUpdateManyWithoutBrandNestedInput = {
    create?: XOR<PartModelCreateWithoutBrandInput, PartModelUncheckedCreateWithoutBrandInput> | PartModelCreateWithoutBrandInput[] | PartModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutBrandInput | PartModelCreateOrConnectWithoutBrandInput[]
    upsert?: PartModelUpsertWithWhereUniqueWithoutBrandInput | PartModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: PartModelCreateManyBrandInputEnvelope
    set?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    disconnect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    delete?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    update?: PartModelUpdateWithWhereUniqueWithoutBrandInput | PartModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: PartModelUpdateManyWithWhereWithoutBrandInput | PartModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: PartModelScalarWhereInput | PartModelScalarWhereInput[]
  }

  export type VehicleModelUpdateManyWithoutBrandNestedInput = {
    create?: XOR<VehicleModelCreateWithoutBrandInput, VehicleModelUncheckedCreateWithoutBrandInput> | VehicleModelCreateWithoutBrandInput[] | VehicleModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: VehicleModelCreateOrConnectWithoutBrandInput | VehicleModelCreateOrConnectWithoutBrandInput[]
    upsert?: VehicleModelUpsertWithWhereUniqueWithoutBrandInput | VehicleModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: VehicleModelCreateManyBrandInputEnvelope
    set?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    disconnect?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    delete?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    connect?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    update?: VehicleModelUpdateWithWhereUniqueWithoutBrandInput | VehicleModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: VehicleModelUpdateManyWithWhereWithoutBrandInput | VehicleModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: VehicleModelScalarWhereInput | VehicleModelScalarWhereInput[]
  }

  export type PartModelUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<PartModelCreateWithoutBrandInput, PartModelUncheckedCreateWithoutBrandInput> | PartModelCreateWithoutBrandInput[] | PartModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutBrandInput | PartModelCreateOrConnectWithoutBrandInput[]
    upsert?: PartModelUpsertWithWhereUniqueWithoutBrandInput | PartModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: PartModelCreateManyBrandInputEnvelope
    set?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    disconnect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    delete?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    update?: PartModelUpdateWithWhereUniqueWithoutBrandInput | PartModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: PartModelUpdateManyWithWhereWithoutBrandInput | PartModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: PartModelScalarWhereInput | PartModelScalarWhereInput[]
  }

  export type VehicleModelUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<VehicleModelCreateWithoutBrandInput, VehicleModelUncheckedCreateWithoutBrandInput> | VehicleModelCreateWithoutBrandInput[] | VehicleModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: VehicleModelCreateOrConnectWithoutBrandInput | VehicleModelCreateOrConnectWithoutBrandInput[]
    upsert?: VehicleModelUpsertWithWhereUniqueWithoutBrandInput | VehicleModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: VehicleModelCreateManyBrandInputEnvelope
    set?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    disconnect?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    delete?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    connect?: VehicleModelWhereUniqueInput | VehicleModelWhereUniqueInput[]
    update?: VehicleModelUpdateWithWhereUniqueWithoutBrandInput | VehicleModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: VehicleModelUpdateManyWithWhereWithoutBrandInput | VehicleModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: VehicleModelScalarWhereInput | VehicleModelScalarWhereInput[]
  }

  export type VehicleModelCreateNestedOneWithoutVehcilesInput = {
    create?: XOR<VehicleModelCreateWithoutVehcilesInput, VehicleModelUncheckedCreateWithoutVehcilesInput>
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehcilesInput
    connect?: VehicleModelWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<WarehouseCreateWithoutVehiclesInput, WarehouseUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutVehiclesInput
    connect?: WarehouseWhereUniqueInput
  }

  export type PartCreateNestedManyWithoutVehicleInput = {
    create?: XOR<PartCreateWithoutVehicleInput, PartUncheckedCreateWithoutVehicleInput> | PartCreateWithoutVehicleInput[] | PartUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutVehicleInput | PartCreateOrConnectWithoutVehicleInput[]
    createMany?: PartCreateManyVehicleInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<PartCreateWithoutVehicleInput, PartUncheckedCreateWithoutVehicleInput> | PartCreateWithoutVehicleInput[] | PartUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutVehicleInput | PartCreateOrConnectWithoutVehicleInput[]
    createMany?: PartCreateManyVehicleInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type VehicleModelUpdateOneRequiredWithoutVehcilesNestedInput = {
    create?: XOR<VehicleModelCreateWithoutVehcilesInput, VehicleModelUncheckedCreateWithoutVehcilesInput>
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehcilesInput
    upsert?: VehicleModelUpsertWithoutVehcilesInput
    connect?: VehicleModelWhereUniqueInput
    update?: XOR<XOR<VehicleModelUpdateToOneWithWhereWithoutVehcilesInput, VehicleModelUpdateWithoutVehcilesInput>, VehicleModelUncheckedUpdateWithoutVehcilesInput>
  }

  export type WarehouseUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<WarehouseCreateWithoutVehiclesInput, WarehouseUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutVehiclesInput
    upsert?: WarehouseUpsertWithoutVehiclesInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutVehiclesInput, WarehouseUpdateWithoutVehiclesInput>, WarehouseUncheckedUpdateWithoutVehiclesInput>
  }

  export type PartUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<PartCreateWithoutVehicleInput, PartUncheckedCreateWithoutVehicleInput> | PartCreateWithoutVehicleInput[] | PartUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutVehicleInput | PartCreateOrConnectWithoutVehicleInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutVehicleInput | PartUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: PartCreateManyVehicleInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutVehicleInput | PartUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: PartUpdateManyWithWhereWithoutVehicleInput | PartUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<PartCreateWithoutVehicleInput, PartUncheckedCreateWithoutVehicleInput> | PartCreateWithoutVehicleInput[] | PartUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PartCreateOrConnectWithoutVehicleInput | PartCreateOrConnectWithoutVehicleInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutVehicleInput | PartUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: PartCreateManyVehicleInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutVehicleInput | PartUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: PartUpdateManyWithWhereWithoutVehicleInput | PartUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutVehicleModelsInput = {
    create?: XOR<BrandCreateWithoutVehicleModelsInput, BrandUncheckedCreateWithoutVehicleModelsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutVehicleModelsInput
    connect?: BrandWhereUniqueInput
  }

  export type VehicleCreateNestedManyWithoutVehicleModelInput = {
    create?: XOR<VehicleCreateWithoutVehicleModelInput, VehicleUncheckedCreateWithoutVehicleModelInput> | VehicleCreateWithoutVehicleModelInput[] | VehicleUncheckedCreateWithoutVehicleModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleModelInput | VehicleCreateOrConnectWithoutVehicleModelInput[]
    createMany?: VehicleCreateManyVehicleModelInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutVehicleModelInput = {
    create?: XOR<VehicleCreateWithoutVehicleModelInput, VehicleUncheckedCreateWithoutVehicleModelInput> | VehicleCreateWithoutVehicleModelInput[] | VehicleUncheckedCreateWithoutVehicleModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleModelInput | VehicleCreateOrConnectWithoutVehicleModelInput[]
    createMany?: VehicleCreateManyVehicleModelInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutVehicleModelsNestedInput = {
    create?: XOR<BrandCreateWithoutVehicleModelsInput, BrandUncheckedCreateWithoutVehicleModelsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutVehicleModelsInput
    upsert?: BrandUpsertWithoutVehicleModelsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutVehicleModelsInput, BrandUpdateWithoutVehicleModelsInput>, BrandUncheckedUpdateWithoutVehicleModelsInput>
  }

  export type VehicleUpdateManyWithoutVehicleModelNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleModelInput, VehicleUncheckedCreateWithoutVehicleModelInput> | VehicleCreateWithoutVehicleModelInput[] | VehicleUncheckedCreateWithoutVehicleModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleModelInput | VehicleCreateOrConnectWithoutVehicleModelInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleModelInput | VehicleUpsertWithWhereUniqueWithoutVehicleModelInput[]
    createMany?: VehicleCreateManyVehicleModelInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleModelInput | VehicleUpdateWithWhereUniqueWithoutVehicleModelInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleModelInput | VehicleUpdateManyWithWhereWithoutVehicleModelInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleModelInput, VehicleUncheckedCreateWithoutVehicleModelInput> | VehicleCreateWithoutVehicleModelInput[] | VehicleUncheckedCreateWithoutVehicleModelInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleModelInput | VehicleCreateOrConnectWithoutVehicleModelInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleModelInput | VehicleUpsertWithWhereUniqueWithoutVehicleModelInput[]
    createMany?: VehicleCreateManyVehicleModelInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutVehicleModelInput | VehicleUpdateWithWhereUniqueWithoutVehicleModelInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutVehicleModelInput | VehicleUpdateManyWithWhereWithoutVehicleModelInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutPartsInput = {
    create?: XOR<VehicleCreateWithoutPartsInput, VehicleUncheckedCreateWithoutPartsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutPartsInput
    connect?: VehicleWhereUniqueInput
  }

  export type PartTypeCreateNestedOneWithoutPartsInput = {
    create?: XOR<PartTypeCreateWithoutPartsInput, PartTypeUncheckedCreateWithoutPartsInput>
    connectOrCreate?: PartTypeCreateOrConnectWithoutPartsInput
    connect?: PartTypeWhereUniqueInput
  }

  export type PartModelCreateNestedOneWithoutPartsInput = {
    create?: XOR<PartModelCreateWithoutPartsInput, PartModelUncheckedCreateWithoutPartsInput>
    connectOrCreate?: PartModelCreateOrConnectWithoutPartsInput
    connect?: PartModelWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutPartsInput = {
    create?: XOR<WarehouseCreateWithoutPartsInput, WarehouseUncheckedCreateWithoutPartsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutPartsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type EnumStateFieldUpdateOperationsInput = {
    set?: $Enums.State
  }

  export type VehicleUpdateOneWithoutPartsNestedInput = {
    create?: XOR<VehicleCreateWithoutPartsInput, VehicleUncheckedCreateWithoutPartsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutPartsInput
    upsert?: VehicleUpsertWithoutPartsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutPartsInput, VehicleUpdateWithoutPartsInput>, VehicleUncheckedUpdateWithoutPartsInput>
  }

  export type PartTypeUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<PartTypeCreateWithoutPartsInput, PartTypeUncheckedCreateWithoutPartsInput>
    connectOrCreate?: PartTypeCreateOrConnectWithoutPartsInput
    upsert?: PartTypeUpsertWithoutPartsInput
    connect?: PartTypeWhereUniqueInput
    update?: XOR<XOR<PartTypeUpdateToOneWithWhereWithoutPartsInput, PartTypeUpdateWithoutPartsInput>, PartTypeUncheckedUpdateWithoutPartsInput>
  }

  export type PartModelUpdateOneWithoutPartsNestedInput = {
    create?: XOR<PartModelCreateWithoutPartsInput, PartModelUncheckedCreateWithoutPartsInput>
    connectOrCreate?: PartModelCreateOrConnectWithoutPartsInput
    upsert?: PartModelUpsertWithoutPartsInput
    disconnect?: PartModelWhereInput | boolean
    delete?: PartModelWhereInput | boolean
    connect?: PartModelWhereUniqueInput
    update?: XOR<XOR<PartModelUpdateToOneWithWhereWithoutPartsInput, PartModelUpdateWithoutPartsInput>, PartModelUncheckedUpdateWithoutPartsInput>
  }

  export type WarehouseUpdateOneWithoutPartsNestedInput = {
    create?: XOR<WarehouseCreateWithoutPartsInput, WarehouseUncheckedCreateWithoutPartsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutPartsInput
    upsert?: WarehouseUpsertWithoutPartsInput
    disconnect?: WarehouseWhereInput | boolean
    delete?: WarehouseWhereInput | boolean
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutPartsInput, WarehouseUpdateWithoutPartsInput>, WarehouseUncheckedUpdateWithoutPartsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartCreateNestedManyWithoutPartTypeInput = {
    create?: XOR<PartCreateWithoutPartTypeInput, PartUncheckedCreateWithoutPartTypeInput> | PartCreateWithoutPartTypeInput[] | PartUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartTypeInput | PartCreateOrConnectWithoutPartTypeInput[]
    createMany?: PartCreateManyPartTypeInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartModelCreateNestedManyWithoutPartTypeInput = {
    create?: XOR<PartModelCreateWithoutPartTypeInput, PartModelUncheckedCreateWithoutPartTypeInput> | PartModelCreateWithoutPartTypeInput[] | PartModelUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutPartTypeInput | PartModelCreateOrConnectWithoutPartTypeInput[]
    createMany?: PartModelCreateManyPartTypeInputEnvelope
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutPartTypeInput = {
    create?: XOR<PartCreateWithoutPartTypeInput, PartUncheckedCreateWithoutPartTypeInput> | PartCreateWithoutPartTypeInput[] | PartUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartTypeInput | PartCreateOrConnectWithoutPartTypeInput[]
    createMany?: PartCreateManyPartTypeInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartModelUncheckedCreateNestedManyWithoutPartTypeInput = {
    create?: XOR<PartModelCreateWithoutPartTypeInput, PartModelUncheckedCreateWithoutPartTypeInput> | PartModelCreateWithoutPartTypeInput[] | PartModelUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutPartTypeInput | PartModelCreateOrConnectWithoutPartTypeInput[]
    createMany?: PartModelCreateManyPartTypeInputEnvelope
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
  }

  export type PartUpdateManyWithoutPartTypeNestedInput = {
    create?: XOR<PartCreateWithoutPartTypeInput, PartUncheckedCreateWithoutPartTypeInput> | PartCreateWithoutPartTypeInput[] | PartUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartTypeInput | PartCreateOrConnectWithoutPartTypeInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutPartTypeInput | PartUpsertWithWhereUniqueWithoutPartTypeInput[]
    createMany?: PartCreateManyPartTypeInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutPartTypeInput | PartUpdateWithWhereUniqueWithoutPartTypeInput[]
    updateMany?: PartUpdateManyWithWhereWithoutPartTypeInput | PartUpdateManyWithWhereWithoutPartTypeInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartModelUpdateManyWithoutPartTypeNestedInput = {
    create?: XOR<PartModelCreateWithoutPartTypeInput, PartModelUncheckedCreateWithoutPartTypeInput> | PartModelCreateWithoutPartTypeInput[] | PartModelUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutPartTypeInput | PartModelCreateOrConnectWithoutPartTypeInput[]
    upsert?: PartModelUpsertWithWhereUniqueWithoutPartTypeInput | PartModelUpsertWithWhereUniqueWithoutPartTypeInput[]
    createMany?: PartModelCreateManyPartTypeInputEnvelope
    set?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    disconnect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    delete?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    update?: PartModelUpdateWithWhereUniqueWithoutPartTypeInput | PartModelUpdateWithWhereUniqueWithoutPartTypeInput[]
    updateMany?: PartModelUpdateManyWithWhereWithoutPartTypeInput | PartModelUpdateManyWithWhereWithoutPartTypeInput[]
    deleteMany?: PartModelScalarWhereInput | PartModelScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutPartTypeNestedInput = {
    create?: XOR<PartCreateWithoutPartTypeInput, PartUncheckedCreateWithoutPartTypeInput> | PartCreateWithoutPartTypeInput[] | PartUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartTypeInput | PartCreateOrConnectWithoutPartTypeInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutPartTypeInput | PartUpsertWithWhereUniqueWithoutPartTypeInput[]
    createMany?: PartCreateManyPartTypeInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutPartTypeInput | PartUpdateWithWhereUniqueWithoutPartTypeInput[]
    updateMany?: PartUpdateManyWithWhereWithoutPartTypeInput | PartUpdateManyWithWhereWithoutPartTypeInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartModelUncheckedUpdateManyWithoutPartTypeNestedInput = {
    create?: XOR<PartModelCreateWithoutPartTypeInput, PartModelUncheckedCreateWithoutPartTypeInput> | PartModelCreateWithoutPartTypeInput[] | PartModelUncheckedCreateWithoutPartTypeInput[]
    connectOrCreate?: PartModelCreateOrConnectWithoutPartTypeInput | PartModelCreateOrConnectWithoutPartTypeInput[]
    upsert?: PartModelUpsertWithWhereUniqueWithoutPartTypeInput | PartModelUpsertWithWhereUniqueWithoutPartTypeInput[]
    createMany?: PartModelCreateManyPartTypeInputEnvelope
    set?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    disconnect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    delete?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    connect?: PartModelWhereUniqueInput | PartModelWhereUniqueInput[]
    update?: PartModelUpdateWithWhereUniqueWithoutPartTypeInput | PartModelUpdateWithWhereUniqueWithoutPartTypeInput[]
    updateMany?: PartModelUpdateManyWithWhereWithoutPartTypeInput | PartModelUpdateManyWithWhereWithoutPartTypeInput[]
    deleteMany?: PartModelScalarWhereInput | PartModelScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutPartModelsInput = {
    create?: XOR<BrandCreateWithoutPartModelsInput, BrandUncheckedCreateWithoutPartModelsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutPartModelsInput
    connect?: BrandWhereUniqueInput
  }

  export type PartTypeCreateNestedOneWithoutPartModelInput = {
    create?: XOR<PartTypeCreateWithoutPartModelInput, PartTypeUncheckedCreateWithoutPartModelInput>
    connectOrCreate?: PartTypeCreateOrConnectWithoutPartModelInput
    connect?: PartTypeWhereUniqueInput
  }

  export type PartCreateNestedManyWithoutPartModelInput = {
    create?: XOR<PartCreateWithoutPartModelInput, PartUncheckedCreateWithoutPartModelInput> | PartCreateWithoutPartModelInput[] | PartUncheckedCreateWithoutPartModelInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartModelInput | PartCreateOrConnectWithoutPartModelInput[]
    createMany?: PartCreateManyPartModelInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutPartModelInput = {
    create?: XOR<PartCreateWithoutPartModelInput, PartUncheckedCreateWithoutPartModelInput> | PartCreateWithoutPartModelInput[] | PartUncheckedCreateWithoutPartModelInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartModelInput | PartCreateOrConnectWithoutPartModelInput[]
    createMany?: PartCreateManyPartModelInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutPartModelsNestedInput = {
    create?: XOR<BrandCreateWithoutPartModelsInput, BrandUncheckedCreateWithoutPartModelsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutPartModelsInput
    upsert?: BrandUpsertWithoutPartModelsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutPartModelsInput, BrandUpdateWithoutPartModelsInput>, BrandUncheckedUpdateWithoutPartModelsInput>
  }

  export type PartTypeUpdateOneRequiredWithoutPartModelNestedInput = {
    create?: XOR<PartTypeCreateWithoutPartModelInput, PartTypeUncheckedCreateWithoutPartModelInput>
    connectOrCreate?: PartTypeCreateOrConnectWithoutPartModelInput
    upsert?: PartTypeUpsertWithoutPartModelInput
    connect?: PartTypeWhereUniqueInput
    update?: XOR<XOR<PartTypeUpdateToOneWithWhereWithoutPartModelInput, PartTypeUpdateWithoutPartModelInput>, PartTypeUncheckedUpdateWithoutPartModelInput>
  }

  export type PartUpdateManyWithoutPartModelNestedInput = {
    create?: XOR<PartCreateWithoutPartModelInput, PartUncheckedCreateWithoutPartModelInput> | PartCreateWithoutPartModelInput[] | PartUncheckedCreateWithoutPartModelInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartModelInput | PartCreateOrConnectWithoutPartModelInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutPartModelInput | PartUpsertWithWhereUniqueWithoutPartModelInput[]
    createMany?: PartCreateManyPartModelInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutPartModelInput | PartUpdateWithWhereUniqueWithoutPartModelInput[]
    updateMany?: PartUpdateManyWithWhereWithoutPartModelInput | PartUpdateManyWithWhereWithoutPartModelInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutPartModelNestedInput = {
    create?: XOR<PartCreateWithoutPartModelInput, PartUncheckedCreateWithoutPartModelInput> | PartCreateWithoutPartModelInput[] | PartUncheckedCreateWithoutPartModelInput[]
    connectOrCreate?: PartCreateOrConnectWithoutPartModelInput | PartCreateOrConnectWithoutPartModelInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutPartModelInput | PartUpsertWithWhereUniqueWithoutPartModelInput[]
    createMany?: PartCreateManyPartModelInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutPartModelInput | PartUpdateWithWhereUniqueWithoutPartModelInput[]
    updateMany?: PartUpdateManyWithWhereWithoutPartModelInput | PartUpdateManyWithWhereWithoutPartModelInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleCreateWithoutWarehouseInput = {
    serialNumber: string
    code: string
    vehicleModel: VehicleModelCreateNestedOneWithoutVehcilesInput
    parts?: PartCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutWarehouseInput = {
    id?: number
    serialNumber: string
    code: string
    vehicleModelId: number
    parts?: PartUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutWarehouseInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutWarehouseInput, VehicleUncheckedCreateWithoutWarehouseInput>
  }

  export type VehicleCreateManyWarehouseInputEnvelope = {
    data: VehicleCreateManyWarehouseInput | VehicleCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type PartCreateWithoutWarehouseInput = {
    state: $Enums.State
    vehicle?: VehicleCreateNestedOneWithoutPartsInput
    partType: PartTypeCreateNestedOneWithoutPartsInput
    partModel?: PartModelCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateWithoutWarehouseInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partTypeId: number
    partModelId?: number | null
  }

  export type PartCreateOrConnectWithoutWarehouseInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutWarehouseInput, PartUncheckedCreateWithoutWarehouseInput>
  }

  export type PartCreateManyWarehouseInputEnvelope = {
    data: PartCreateManyWarehouseInput | PartCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutWarehouseInput, VehicleUncheckedUpdateWithoutWarehouseInput>
    create: XOR<VehicleCreateWithoutWarehouseInput, VehicleUncheckedCreateWithoutWarehouseInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutWarehouseInput, VehicleUncheckedUpdateWithoutWarehouseInput>
  }

  export type VehicleUpdateManyWithWhereWithoutWarehouseInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    serialNumber?: StringFilter<"Vehicle"> | string
    code?: StringFilter<"Vehicle"> | string
    vehicleModelId?: IntFilter<"Vehicle"> | number
    warehouseId?: IntFilter<"Vehicle"> | number
  }

  export type PartUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutWarehouseInput, PartUncheckedUpdateWithoutWarehouseInput>
    create: XOR<PartCreateWithoutWarehouseInput, PartUncheckedCreateWithoutWarehouseInput>
  }

  export type PartUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutWarehouseInput, PartUncheckedUpdateWithoutWarehouseInput>
  }

  export type PartUpdateManyWithWhereWithoutWarehouseInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type PartScalarWhereInput = {
    AND?: PartScalarWhereInput | PartScalarWhereInput[]
    OR?: PartScalarWhereInput[]
    NOT?: PartScalarWhereInput | PartScalarWhereInput[]
    id?: IntFilter<"Part"> | number
    state?: EnumStateFilter<"Part"> | $Enums.State
    vehicleId?: IntNullableFilter<"Part"> | number | null
    partTypeId?: IntFilter<"Part"> | number
    partModelId?: IntNullableFilter<"Part"> | number | null
    warehouseId?: IntNullableFilter<"Part"> | number | null
  }

  export type PartModelCreateWithoutBrandInput = {
    name: string
    code: string
    partType: PartTypeCreateNestedOneWithoutPartModelInput
    parts?: PartCreateNestedManyWithoutPartModelInput
  }

  export type PartModelUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    code: string
    partTypeId: number
    parts?: PartUncheckedCreateNestedManyWithoutPartModelInput
  }

  export type PartModelCreateOrConnectWithoutBrandInput = {
    where: PartModelWhereUniqueInput
    create: XOR<PartModelCreateWithoutBrandInput, PartModelUncheckedCreateWithoutBrandInput>
  }

  export type PartModelCreateManyBrandInputEnvelope = {
    data: PartModelCreateManyBrandInput | PartModelCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type VehicleModelCreateWithoutBrandInput = {
    name: string
    vehciles?: VehicleCreateNestedManyWithoutVehicleModelInput
  }

  export type VehicleModelUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    vehciles?: VehicleUncheckedCreateNestedManyWithoutVehicleModelInput
  }

  export type VehicleModelCreateOrConnectWithoutBrandInput = {
    where: VehicleModelWhereUniqueInput
    create: XOR<VehicleModelCreateWithoutBrandInput, VehicleModelUncheckedCreateWithoutBrandInput>
  }

  export type VehicleModelCreateManyBrandInputEnvelope = {
    data: VehicleModelCreateManyBrandInput | VehicleModelCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type PartModelUpsertWithWhereUniqueWithoutBrandInput = {
    where: PartModelWhereUniqueInput
    update: XOR<PartModelUpdateWithoutBrandInput, PartModelUncheckedUpdateWithoutBrandInput>
    create: XOR<PartModelCreateWithoutBrandInput, PartModelUncheckedCreateWithoutBrandInput>
  }

  export type PartModelUpdateWithWhereUniqueWithoutBrandInput = {
    where: PartModelWhereUniqueInput
    data: XOR<PartModelUpdateWithoutBrandInput, PartModelUncheckedUpdateWithoutBrandInput>
  }

  export type PartModelUpdateManyWithWhereWithoutBrandInput = {
    where: PartModelScalarWhereInput
    data: XOR<PartModelUpdateManyMutationInput, PartModelUncheckedUpdateManyWithoutBrandInput>
  }

  export type PartModelScalarWhereInput = {
    AND?: PartModelScalarWhereInput | PartModelScalarWhereInput[]
    OR?: PartModelScalarWhereInput[]
    NOT?: PartModelScalarWhereInput | PartModelScalarWhereInput[]
    id?: IntFilter<"PartModel"> | number
    name?: StringFilter<"PartModel"> | string
    code?: StringFilter<"PartModel"> | string
    brandId?: IntFilter<"PartModel"> | number
    partTypeId?: IntFilter<"PartModel"> | number
  }

  export type VehicleModelUpsertWithWhereUniqueWithoutBrandInput = {
    where: VehicleModelWhereUniqueInput
    update: XOR<VehicleModelUpdateWithoutBrandInput, VehicleModelUncheckedUpdateWithoutBrandInput>
    create: XOR<VehicleModelCreateWithoutBrandInput, VehicleModelUncheckedCreateWithoutBrandInput>
  }

  export type VehicleModelUpdateWithWhereUniqueWithoutBrandInput = {
    where: VehicleModelWhereUniqueInput
    data: XOR<VehicleModelUpdateWithoutBrandInput, VehicleModelUncheckedUpdateWithoutBrandInput>
  }

  export type VehicleModelUpdateManyWithWhereWithoutBrandInput = {
    where: VehicleModelScalarWhereInput
    data: XOR<VehicleModelUpdateManyMutationInput, VehicleModelUncheckedUpdateManyWithoutBrandInput>
  }

  export type VehicleModelScalarWhereInput = {
    AND?: VehicleModelScalarWhereInput | VehicleModelScalarWhereInput[]
    OR?: VehicleModelScalarWhereInput[]
    NOT?: VehicleModelScalarWhereInput | VehicleModelScalarWhereInput[]
    id?: IntFilter<"VehicleModel"> | number
    name?: StringFilter<"VehicleModel"> | string
    brandId?: IntFilter<"VehicleModel"> | number
  }

  export type VehicleModelCreateWithoutVehcilesInput = {
    name: string
    brand: BrandCreateNestedOneWithoutVehicleModelsInput
  }

  export type VehicleModelUncheckedCreateWithoutVehcilesInput = {
    id?: number
    name: string
    brandId: number
  }

  export type VehicleModelCreateOrConnectWithoutVehcilesInput = {
    where: VehicleModelWhereUniqueInput
    create: XOR<VehicleModelCreateWithoutVehcilesInput, VehicleModelUncheckedCreateWithoutVehcilesInput>
  }

  export type WarehouseCreateWithoutVehiclesInput = {
    name: string
    parts?: PartCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutVehiclesInput = {
    id?: number
    name: string
    parts?: PartUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutVehiclesInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutVehiclesInput, WarehouseUncheckedCreateWithoutVehiclesInput>
  }

  export type PartCreateWithoutVehicleInput = {
    state: $Enums.State
    partType: PartTypeCreateNestedOneWithoutPartsInput
    partModel?: PartModelCreateNestedOneWithoutPartsInput
    warehouse?: WarehouseCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateWithoutVehicleInput = {
    id?: number
    state: $Enums.State
    partTypeId: number
    partModelId?: number | null
    warehouseId?: number | null
  }

  export type PartCreateOrConnectWithoutVehicleInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutVehicleInput, PartUncheckedCreateWithoutVehicleInput>
  }

  export type PartCreateManyVehicleInputEnvelope = {
    data: PartCreateManyVehicleInput | PartCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleModelUpsertWithoutVehcilesInput = {
    update: XOR<VehicleModelUpdateWithoutVehcilesInput, VehicleModelUncheckedUpdateWithoutVehcilesInput>
    create: XOR<VehicleModelCreateWithoutVehcilesInput, VehicleModelUncheckedCreateWithoutVehcilesInput>
    where?: VehicleModelWhereInput
  }

  export type VehicleModelUpdateToOneWithWhereWithoutVehcilesInput = {
    where?: VehicleModelWhereInput
    data: XOR<VehicleModelUpdateWithoutVehcilesInput, VehicleModelUncheckedUpdateWithoutVehcilesInput>
  }

  export type VehicleModelUpdateWithoutVehcilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutVehicleModelsNestedInput
  }

  export type VehicleModelUncheckedUpdateWithoutVehcilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseUpsertWithoutVehiclesInput = {
    update: XOR<WarehouseUpdateWithoutVehiclesInput, WarehouseUncheckedUpdateWithoutVehiclesInput>
    create: XOR<WarehouseCreateWithoutVehiclesInput, WarehouseUncheckedCreateWithoutVehiclesInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutVehiclesInput, WarehouseUncheckedUpdateWithoutVehiclesInput>
  }

  export type WarehouseUpdateWithoutVehiclesInput = {
    name?: StringFieldUpdateOperationsInput | string
    parts?: PartUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parts?: PartUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type PartUpsertWithWhereUniqueWithoutVehicleInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutVehicleInput, PartUncheckedUpdateWithoutVehicleInput>
    create: XOR<PartCreateWithoutVehicleInput, PartUncheckedCreateWithoutVehicleInput>
  }

  export type PartUpdateWithWhereUniqueWithoutVehicleInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutVehicleInput, PartUncheckedUpdateWithoutVehicleInput>
  }

  export type PartUpdateManyWithWhereWithoutVehicleInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutVehicleInput>
  }

  export type BrandCreateWithoutVehicleModelsInput = {
    name: string
    partModels?: PartModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutVehicleModelsInput = {
    id?: number
    name: string
    partModels?: PartModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutVehicleModelsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutVehicleModelsInput, BrandUncheckedCreateWithoutVehicleModelsInput>
  }

  export type VehicleCreateWithoutVehicleModelInput = {
    serialNumber: string
    code: string
    warehouse: WarehouseCreateNestedOneWithoutVehiclesInput
    parts?: PartCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleModelInput = {
    id?: number
    serialNumber: string
    code: string
    warehouseId: number
    parts?: PartUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleModelInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleModelInput, VehicleUncheckedCreateWithoutVehicleModelInput>
  }

  export type VehicleCreateManyVehicleModelInputEnvelope = {
    data: VehicleCreateManyVehicleModelInput | VehicleCreateManyVehicleModelInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutVehicleModelsInput = {
    update: XOR<BrandUpdateWithoutVehicleModelsInput, BrandUncheckedUpdateWithoutVehicleModelsInput>
    create: XOR<BrandCreateWithoutVehicleModelsInput, BrandUncheckedCreateWithoutVehicleModelsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutVehicleModelsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutVehicleModelsInput, BrandUncheckedUpdateWithoutVehicleModelsInput>
  }

  export type BrandUpdateWithoutVehicleModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    partModels?: PartModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutVehicleModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    partModels?: PartModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type VehicleUpsertWithWhereUniqueWithoutVehicleModelInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutVehicleModelInput, VehicleUncheckedUpdateWithoutVehicleModelInput>
    create: XOR<VehicleCreateWithoutVehicleModelInput, VehicleUncheckedCreateWithoutVehicleModelInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutVehicleModelInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutVehicleModelInput, VehicleUncheckedUpdateWithoutVehicleModelInput>
  }

  export type VehicleUpdateManyWithWhereWithoutVehicleModelInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehicleModelInput>
  }

  export type VehicleCreateWithoutPartsInput = {
    serialNumber: string
    code: string
    vehicleModel: VehicleModelCreateNestedOneWithoutVehcilesInput
    warehouse: WarehouseCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutPartsInput = {
    id?: number
    serialNumber: string
    code: string
    vehicleModelId: number
    warehouseId: number
  }

  export type VehicleCreateOrConnectWithoutPartsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutPartsInput, VehicleUncheckedCreateWithoutPartsInput>
  }

  export type PartTypeCreateWithoutPartsInput = {
    name: string
    PartModel?: PartModelCreateNestedManyWithoutPartTypeInput
  }

  export type PartTypeUncheckedCreateWithoutPartsInput = {
    id?: number
    name: string
    PartModel?: PartModelUncheckedCreateNestedManyWithoutPartTypeInput
  }

  export type PartTypeCreateOrConnectWithoutPartsInput = {
    where: PartTypeWhereUniqueInput
    create: XOR<PartTypeCreateWithoutPartsInput, PartTypeUncheckedCreateWithoutPartsInput>
  }

  export type PartModelCreateWithoutPartsInput = {
    name: string
    code: string
    brand: BrandCreateNestedOneWithoutPartModelsInput
    partType: PartTypeCreateNestedOneWithoutPartModelInput
  }

  export type PartModelUncheckedCreateWithoutPartsInput = {
    id?: number
    name: string
    code: string
    brandId: number
    partTypeId: number
  }

  export type PartModelCreateOrConnectWithoutPartsInput = {
    where: PartModelWhereUniqueInput
    create: XOR<PartModelCreateWithoutPartsInput, PartModelUncheckedCreateWithoutPartsInput>
  }

  export type WarehouseCreateWithoutPartsInput = {
    name: string
    vehicles?: VehicleCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutPartsInput = {
    id?: number
    name: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutPartsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutPartsInput, WarehouseUncheckedCreateWithoutPartsInput>
  }

  export type VehicleUpsertWithoutPartsInput = {
    update: XOR<VehicleUpdateWithoutPartsInput, VehicleUncheckedUpdateWithoutPartsInput>
    create: XOR<VehicleCreateWithoutPartsInput, VehicleUncheckedCreateWithoutPartsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutPartsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutPartsInput, VehicleUncheckedUpdateWithoutPartsInput>
  }

  export type VehicleUpdateWithoutPartsInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModel?: VehicleModelUpdateOneRequiredWithoutVehcilesNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModelId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
  }

  export type PartTypeUpsertWithoutPartsInput = {
    update: XOR<PartTypeUpdateWithoutPartsInput, PartTypeUncheckedUpdateWithoutPartsInput>
    create: XOR<PartTypeCreateWithoutPartsInput, PartTypeUncheckedCreateWithoutPartsInput>
    where?: PartTypeWhereInput
  }

  export type PartTypeUpdateToOneWithWhereWithoutPartsInput = {
    where?: PartTypeWhereInput
    data: XOR<PartTypeUpdateWithoutPartsInput, PartTypeUncheckedUpdateWithoutPartsInput>
  }

  export type PartTypeUpdateWithoutPartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    PartModel?: PartModelUpdateManyWithoutPartTypeNestedInput
  }

  export type PartTypeUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    PartModel?: PartModelUncheckedUpdateManyWithoutPartTypeNestedInput
  }

  export type PartModelUpsertWithoutPartsInput = {
    update: XOR<PartModelUpdateWithoutPartsInput, PartModelUncheckedUpdateWithoutPartsInput>
    create: XOR<PartModelCreateWithoutPartsInput, PartModelUncheckedCreateWithoutPartsInput>
    where?: PartModelWhereInput
  }

  export type PartModelUpdateToOneWithWhereWithoutPartsInput = {
    where?: PartModelWhereInput
    data: XOR<PartModelUpdateWithoutPartsInput, PartModelUncheckedUpdateWithoutPartsInput>
  }

  export type PartModelUpdateWithoutPartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutPartModelsNestedInput
    partType?: PartTypeUpdateOneRequiredWithoutPartModelNestedInput
  }

  export type PartModelUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    partTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseUpsertWithoutPartsInput = {
    update: XOR<WarehouseUpdateWithoutPartsInput, WarehouseUncheckedUpdateWithoutPartsInput>
    create: XOR<WarehouseCreateWithoutPartsInput, WarehouseUncheckedCreateWithoutPartsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutPartsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutPartsInput, WarehouseUncheckedUpdateWithoutPartsInput>
  }

  export type WarehouseUpdateWithoutPartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type PartCreateWithoutPartTypeInput = {
    state: $Enums.State
    vehicle?: VehicleCreateNestedOneWithoutPartsInput
    partModel?: PartModelCreateNestedOneWithoutPartsInput
    warehouse?: WarehouseCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateWithoutPartTypeInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partModelId?: number | null
    warehouseId?: number | null
  }

  export type PartCreateOrConnectWithoutPartTypeInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutPartTypeInput, PartUncheckedCreateWithoutPartTypeInput>
  }

  export type PartCreateManyPartTypeInputEnvelope = {
    data: PartCreateManyPartTypeInput | PartCreateManyPartTypeInput[]
    skipDuplicates?: boolean
  }

  export type PartModelCreateWithoutPartTypeInput = {
    name: string
    code: string
    brand: BrandCreateNestedOneWithoutPartModelsInput
    parts?: PartCreateNestedManyWithoutPartModelInput
  }

  export type PartModelUncheckedCreateWithoutPartTypeInput = {
    id?: number
    name: string
    code: string
    brandId: number
    parts?: PartUncheckedCreateNestedManyWithoutPartModelInput
  }

  export type PartModelCreateOrConnectWithoutPartTypeInput = {
    where: PartModelWhereUniqueInput
    create: XOR<PartModelCreateWithoutPartTypeInput, PartModelUncheckedCreateWithoutPartTypeInput>
  }

  export type PartModelCreateManyPartTypeInputEnvelope = {
    data: PartModelCreateManyPartTypeInput | PartModelCreateManyPartTypeInput[]
    skipDuplicates?: boolean
  }

  export type PartUpsertWithWhereUniqueWithoutPartTypeInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutPartTypeInput, PartUncheckedUpdateWithoutPartTypeInput>
    create: XOR<PartCreateWithoutPartTypeInput, PartUncheckedCreateWithoutPartTypeInput>
  }

  export type PartUpdateWithWhereUniqueWithoutPartTypeInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutPartTypeInput, PartUncheckedUpdateWithoutPartTypeInput>
  }

  export type PartUpdateManyWithWhereWithoutPartTypeInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutPartTypeInput>
  }

  export type PartModelUpsertWithWhereUniqueWithoutPartTypeInput = {
    where: PartModelWhereUniqueInput
    update: XOR<PartModelUpdateWithoutPartTypeInput, PartModelUncheckedUpdateWithoutPartTypeInput>
    create: XOR<PartModelCreateWithoutPartTypeInput, PartModelUncheckedCreateWithoutPartTypeInput>
  }

  export type PartModelUpdateWithWhereUniqueWithoutPartTypeInput = {
    where: PartModelWhereUniqueInput
    data: XOR<PartModelUpdateWithoutPartTypeInput, PartModelUncheckedUpdateWithoutPartTypeInput>
  }

  export type PartModelUpdateManyWithWhereWithoutPartTypeInput = {
    where: PartModelScalarWhereInput
    data: XOR<PartModelUpdateManyMutationInput, PartModelUncheckedUpdateManyWithoutPartTypeInput>
  }

  export type BrandCreateWithoutPartModelsInput = {
    name: string
    vehicleModels?: VehicleModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutPartModelsInput = {
    id?: number
    name: string
    vehicleModels?: VehicleModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutPartModelsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutPartModelsInput, BrandUncheckedCreateWithoutPartModelsInput>
  }

  export type PartTypeCreateWithoutPartModelInput = {
    name: string
    parts?: PartCreateNestedManyWithoutPartTypeInput
  }

  export type PartTypeUncheckedCreateWithoutPartModelInput = {
    id?: number
    name: string
    parts?: PartUncheckedCreateNestedManyWithoutPartTypeInput
  }

  export type PartTypeCreateOrConnectWithoutPartModelInput = {
    where: PartTypeWhereUniqueInput
    create: XOR<PartTypeCreateWithoutPartModelInput, PartTypeUncheckedCreateWithoutPartModelInput>
  }

  export type PartCreateWithoutPartModelInput = {
    state: $Enums.State
    vehicle?: VehicleCreateNestedOneWithoutPartsInput
    partType: PartTypeCreateNestedOneWithoutPartsInput
    warehouse?: WarehouseCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateWithoutPartModelInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partTypeId: number
    warehouseId?: number | null
  }

  export type PartCreateOrConnectWithoutPartModelInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutPartModelInput, PartUncheckedCreateWithoutPartModelInput>
  }

  export type PartCreateManyPartModelInputEnvelope = {
    data: PartCreateManyPartModelInput | PartCreateManyPartModelInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutPartModelsInput = {
    update: XOR<BrandUpdateWithoutPartModelsInput, BrandUncheckedUpdateWithoutPartModelsInput>
    create: XOR<BrandCreateWithoutPartModelsInput, BrandUncheckedCreateWithoutPartModelsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutPartModelsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutPartModelsInput, BrandUncheckedUpdateWithoutPartModelsInput>
  }

  export type BrandUpdateWithoutPartModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    vehicleModels?: VehicleModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutPartModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vehicleModels?: VehicleModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type PartTypeUpsertWithoutPartModelInput = {
    update: XOR<PartTypeUpdateWithoutPartModelInput, PartTypeUncheckedUpdateWithoutPartModelInput>
    create: XOR<PartTypeCreateWithoutPartModelInput, PartTypeUncheckedCreateWithoutPartModelInput>
    where?: PartTypeWhereInput
  }

  export type PartTypeUpdateToOneWithWhereWithoutPartModelInput = {
    where?: PartTypeWhereInput
    data: XOR<PartTypeUpdateWithoutPartModelInput, PartTypeUncheckedUpdateWithoutPartModelInput>
  }

  export type PartTypeUpdateWithoutPartModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    parts?: PartUpdateManyWithoutPartTypeNestedInput
  }

  export type PartTypeUncheckedUpdateWithoutPartModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parts?: PartUncheckedUpdateManyWithoutPartTypeNestedInput
  }

  export type PartUpsertWithWhereUniqueWithoutPartModelInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutPartModelInput, PartUncheckedUpdateWithoutPartModelInput>
    create: XOR<PartCreateWithoutPartModelInput, PartUncheckedCreateWithoutPartModelInput>
  }

  export type PartUpdateWithWhereUniqueWithoutPartModelInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutPartModelInput, PartUncheckedUpdateWithoutPartModelInput>
  }

  export type PartUpdateManyWithWhereWithoutPartModelInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutPartModelInput>
  }

  export type VehicleCreateManyWarehouseInput = {
    id?: number
    serialNumber: string
    code: string
    vehicleModelId: number
  }

  export type PartCreateManyWarehouseInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partTypeId: number
    partModelId?: number | null
  }

  export type VehicleUpdateWithoutWarehouseInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModel?: VehicleModelUpdateOneRequiredWithoutVehcilesNestedInput
    parts?: PartUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModelId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    vehicleModelId?: IntFieldUpdateOperationsInput | number
  }

  export type PartUpdateWithoutWarehouseInput = {
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicle?: VehicleUpdateOneWithoutPartsNestedInput
    partType?: PartTypeUpdateOneRequiredWithoutPartsNestedInput
    partModel?: PartModelUpdateOneWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partTypeId?: IntFieldUpdateOperationsInput | number
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partTypeId?: IntFieldUpdateOperationsInput | number
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartModelCreateManyBrandInput = {
    id?: number
    name: string
    code: string
    partTypeId: number
  }

  export type VehicleModelCreateManyBrandInput = {
    id?: number
    name: string
  }

  export type PartModelUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    partType?: PartTypeUpdateOneRequiredWithoutPartModelNestedInput
    parts?: PartUpdateManyWithoutPartModelNestedInput
  }

  export type PartModelUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    partTypeId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutPartModelNestedInput
  }

  export type PartModelUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    partTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleModelUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    vehciles?: VehicleUpdateManyWithoutVehicleModelNestedInput
  }

  export type VehicleModelUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vehciles?: VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput
  }

  export type VehicleModelUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PartCreateManyVehicleInput = {
    id?: number
    state: $Enums.State
    partTypeId: number
    partModelId?: number | null
    warehouseId?: number | null
  }

  export type PartUpdateWithoutVehicleInput = {
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    partType?: PartTypeUpdateOneRequiredWithoutPartsNestedInput
    partModel?: PartModelUpdateOneWithoutPartsNestedInput
    warehouse?: WarehouseUpdateOneWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    partTypeId?: IntFieldUpdateOperationsInput | number
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    partTypeId?: IntFieldUpdateOperationsInput | number
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehicleCreateManyVehicleModelInput = {
    id?: number
    serialNumber: string
    code: string
    warehouseId: number
  }

  export type VehicleUpdateWithoutVehicleModelInput = {
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    warehouse?: WarehouseUpdateOneRequiredWithoutVehiclesNestedInput
    parts?: PartUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    warehouseId?: IntFieldUpdateOperationsInput | number
  }

  export type PartCreateManyPartTypeInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partModelId?: number | null
    warehouseId?: number | null
  }

  export type PartModelCreateManyPartTypeInput = {
    id?: number
    name: string
    code: string
    brandId: number
  }

  export type PartUpdateWithoutPartTypeInput = {
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicle?: VehicleUpdateOneWithoutPartsNestedInput
    partModel?: PartModelUpdateOneWithoutPartsNestedInput
    warehouse?: WarehouseUpdateOneWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateWithoutPartTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUncheckedUpdateManyWithoutPartTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partModelId?: NullableIntFieldUpdateOperationsInput | number | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartModelUpdateWithoutPartTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutPartModelsNestedInput
    parts?: PartUpdateManyWithoutPartModelNestedInput
  }

  export type PartModelUncheckedUpdateWithoutPartTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutPartModelNestedInput
  }

  export type PartModelUncheckedUpdateManyWithoutPartTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type PartCreateManyPartModelInput = {
    id?: number
    state: $Enums.State
    vehicleId?: number | null
    partTypeId: number
    warehouseId?: number | null
  }

  export type PartUpdateWithoutPartModelInput = {
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicle?: VehicleUpdateOneWithoutPartsNestedInput
    partType?: PartTypeUpdateOneRequiredWithoutPartsNestedInput
    warehouse?: WarehouseUpdateOneWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateWithoutPartModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partTypeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartUncheckedUpdateManyWithoutPartModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    vehicleId?: NullableIntFieldUpdateOperationsInput | number | null
    partTypeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}