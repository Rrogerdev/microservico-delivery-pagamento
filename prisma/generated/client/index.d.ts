
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
 * Model pagamentos
 * 
 */
export type pagamentos = $Result.DefaultSelection<Prisma.$pagamentosPayload>
/**
 * Model pagamento_detalhes
 * 
 */
export type pagamento_detalhes = $Result.DefaultSelection<Prisma.$pagamento_detalhesPayload>
/**
 * Model cupons
 * 
 */
export type cupons = $Result.DefaultSelection<Prisma.$cuponsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pagamentos
 * const pagamentos = await prisma.pagamentos.findMany()
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
   * // Fetch zero or more Pagamentos
   * const pagamentos = await prisma.pagamentos.findMany()
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
   * `prisma.pagamentos`: Exposes CRUD operations for the **pagamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamentos.findMany()
    * ```
    */
  get pagamentos(): Prisma.pagamentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento_detalhes`: Exposes CRUD operations for the **pagamento_detalhes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamento_detalhes
    * const pagamento_detalhes = await prisma.pagamento_detalhes.findMany()
    * ```
    */
  get pagamento_detalhes(): Prisma.pagamento_detalhesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cupons`: Exposes CRUD operations for the **cupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cupons
    * const cupons = await prisma.cupons.findMany()
    * ```
    */
  get cupons(): Prisma.cuponsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
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
    pagamentos: 'pagamentos',
    pagamento_detalhes: 'pagamento_detalhes',
    cupons: 'cupons'
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
      modelProps: "pagamentos" | "pagamento_detalhes" | "cupons"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pagamentos: {
        payload: Prisma.$pagamentosPayload<ExtArgs>
        fields: Prisma.pagamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          findFirst: {
            args: Prisma.pagamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          findMany: {
            args: Prisma.pagamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>[]
          }
          create: {
            args: Prisma.pagamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          createMany: {
            args: Prisma.pagamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          update: {
            args: Prisma.pagamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          deleteMany: {
            args: Prisma.pagamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          aggregate: {
            args: Prisma.PagamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamentos>
          }
          groupBy: {
            args: Prisma.pagamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamentosCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentosCountAggregateOutputType> | number
          }
        }
      }
      pagamento_detalhes: {
        payload: Prisma.$pagamento_detalhesPayload<ExtArgs>
        fields: Prisma.pagamento_detalhesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamento_detalhesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamento_detalhesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>
          }
          findFirst: {
            args: Prisma.pagamento_detalhesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamento_detalhesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>
          }
          findMany: {
            args: Prisma.pagamento_detalhesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>[]
          }
          create: {
            args: Prisma.pagamento_detalhesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>
          }
          createMany: {
            args: Prisma.pagamento_detalhesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagamento_detalhesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>
          }
          update: {
            args: Prisma.pagamento_detalhesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>
          }
          deleteMany: {
            args: Prisma.pagamento_detalhesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamento_detalhesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagamento_detalhesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamento_detalhesPayload>
          }
          aggregate: {
            args: Prisma.Pagamento_detalhesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento_detalhes>
          }
          groupBy: {
            args: Prisma.pagamento_detalhesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pagamento_detalhesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamento_detalhesCountArgs<ExtArgs>
            result: $Utils.Optional<Pagamento_detalhesCountAggregateOutputType> | number
          }
        }
      }
      cupons: {
        payload: Prisma.$cuponsPayload<ExtArgs>
        fields: Prisma.cuponsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuponsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuponsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>
          }
          findFirst: {
            args: Prisma.cuponsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuponsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>
          }
          findMany: {
            args: Prisma.cuponsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>[]
          }
          create: {
            args: Prisma.cuponsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>
          }
          createMany: {
            args: Prisma.cuponsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cuponsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>
          }
          update: {
            args: Prisma.cuponsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>
          }
          deleteMany: {
            args: Prisma.cuponsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuponsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cuponsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuponsPayload>
          }
          aggregate: {
            args: Prisma.CuponsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCupons>
          }
          groupBy: {
            args: Prisma.cuponsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuponsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuponsCountArgs<ExtArgs>
            result: $Utils.Optional<CuponsCountAggregateOutputType> | number
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
    pagamentos?: pagamentosOmit
    pagamento_detalhes?: pagamento_detalhesOmit
    cupons?: cuponsOmit
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
   * Count Type PagamentosCountOutputType
   */

  export type PagamentosCountOutputType = {
    pagamento_detalhes: number
  }

  export type PagamentosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento_detalhes?: boolean | PagamentosCountOutputTypeCountPagamento_detalhesArgs
  }

  // Custom InputTypes
  /**
   * PagamentosCountOutputType without action
   */
  export type PagamentosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentosCountOutputType
     */
    select?: PagamentosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PagamentosCountOutputType without action
   */
  export type PagamentosCountOutputTypeCountPagamento_detalhesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamento_detalhesWhereInput
  }


  /**
   * Count Type CuponsCountOutputType
   */

  export type CuponsCountOutputType = {
    pagamentos: number
  }

  export type CuponsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | CuponsCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * CuponsCountOutputType without action
   */
  export type CuponsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuponsCountOutputType
     */
    select?: CuponsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuponsCountOutputType without action
   */
  export type CuponsCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model pagamentos
   */

  export type AggregatePagamentos = {
    _count: PagamentosCountAggregateOutputType | null
    _avg: PagamentosAvgAggregateOutputType | null
    _sum: PagamentosSumAggregateOutputType | null
    _min: PagamentosMinAggregateOutputType | null
    _max: PagamentosMaxAggregateOutputType | null
  }

  export type PagamentosAvgAggregateOutputType = {
    pagamento_id: number | null
    pagamento_status: number | null
    pedido_id: number | null
    cupom_id: number | null
    pagamentos_valor: Decimal | null
  }

  export type PagamentosSumAggregateOutputType = {
    pagamento_id: number | null
    pagamento_status: number | null
    pedido_id: number | null
    cupom_id: number | null
    pagamentos_valor: Decimal | null
  }

  export type PagamentosMinAggregateOutputType = {
    pagamento_id: number | null
    pagamento_status: number | null
    pedido_id: number | null
    cupom_id: number | null
    pagamentos_data: Date | null
    pagamentos_valor: Decimal | null
  }

  export type PagamentosMaxAggregateOutputType = {
    pagamento_id: number | null
    pagamento_status: number | null
    pedido_id: number | null
    cupom_id: number | null
    pagamentos_data: Date | null
    pagamentos_valor: Decimal | null
  }

  export type PagamentosCountAggregateOutputType = {
    pagamento_id: number
    pagamento_status: number
    pedido_id: number
    cupom_id: number
    pagamentos_data: number
    pagamentos_valor: number
    _all: number
  }


  export type PagamentosAvgAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
    pedido_id?: true
    cupom_id?: true
    pagamentos_valor?: true
  }

  export type PagamentosSumAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
    pedido_id?: true
    cupom_id?: true
    pagamentos_valor?: true
  }

  export type PagamentosMinAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
    pedido_id?: true
    cupom_id?: true
    pagamentos_data?: true
    pagamentos_valor?: true
  }

  export type PagamentosMaxAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
    pedido_id?: true
    cupom_id?: true
    pagamentos_data?: true
    pagamentos_valor?: true
  }

  export type PagamentosCountAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
    pedido_id?: true
    cupom_id?: true
    pagamentos_data?: true
    pagamentos_valor?: true
    _all?: true
  }

  export type PagamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to aggregate.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamentos
    **/
    _count?: true | PagamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentosMaxAggregateInputType
  }

  export type GetPagamentosAggregateType<T extends PagamentosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamentos[P]>
      : GetScalarType<T[P], AggregatePagamentos[P]>
  }




  export type pagamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentosWhereInput
    orderBy?: pagamentosOrderByWithAggregationInput | pagamentosOrderByWithAggregationInput[]
    by: PagamentosScalarFieldEnum[] | PagamentosScalarFieldEnum
    having?: pagamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentosCountAggregateInputType | true
    _avg?: PagamentosAvgAggregateInputType
    _sum?: PagamentosSumAggregateInputType
    _min?: PagamentosMinAggregateInputType
    _max?: PagamentosMaxAggregateInputType
  }

  export type PagamentosGroupByOutputType = {
    pagamento_id: number
    pagamento_status: number
    pedido_id: number
    cupom_id: number | null
    pagamentos_data: Date
    pagamentos_valor: Decimal | null
    _count: PagamentosCountAggregateOutputType | null
    _avg: PagamentosAvgAggregateOutputType | null
    _sum: PagamentosSumAggregateOutputType | null
    _min: PagamentosMinAggregateOutputType | null
    _max: PagamentosMaxAggregateOutputType | null
  }

  type GetPagamentosGroupByPayload<T extends pagamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentosGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentosGroupByOutputType[P]>
        }
      >
    >


  export type pagamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_id?: boolean
    pagamento_status?: boolean
    pedido_id?: boolean
    cupom_id?: boolean
    pagamentos_data?: boolean
    pagamentos_valor?: boolean
    pagamento_detalhes?: boolean | pagamentos$pagamento_detalhesArgs<ExtArgs>
    cupons?: boolean | pagamentos$cuponsArgs<ExtArgs>
    _count?: boolean | PagamentosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentos"]>



  export type pagamentosSelectScalar = {
    pagamento_id?: boolean
    pagamento_status?: boolean
    pedido_id?: boolean
    cupom_id?: boolean
    pagamentos_data?: boolean
    pagamentos_valor?: boolean
  }

  export type pagamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pagamento_id" | "pagamento_status" | "pedido_id" | "cupom_id" | "pagamentos_data" | "pagamentos_valor", ExtArgs["result"]["pagamentos"]>
  export type pagamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento_detalhes?: boolean | pagamentos$pagamento_detalhesArgs<ExtArgs>
    cupons?: boolean | pagamentos$cuponsArgs<ExtArgs>
    _count?: boolean | PagamentosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pagamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamentos"
    objects: {
      pagamento_detalhes: Prisma.$pagamento_detalhesPayload<ExtArgs>[]
      cupons: Prisma.$cuponsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pagamento_id: number
      pagamento_status: number
      pedido_id: number
      cupom_id: number | null
      pagamentos_data: Date
      pagamentos_valor: Prisma.Decimal | null
    }, ExtArgs["result"]["pagamentos"]>
    composites: {}
  }

  type pagamentosGetPayload<S extends boolean | null | undefined | pagamentosDefaultArgs> = $Result.GetResult<Prisma.$pagamentosPayload, S>

  type pagamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentosCountAggregateInputType | true
    }

  export interface pagamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamentos'], meta: { name: 'pagamentos' } }
    /**
     * Find zero or one Pagamentos that matches the filter.
     * @param {pagamentosFindUniqueArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamentosFindUniqueArgs>(args: SelectSubset<T, pagamentosFindUniqueArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagamentosFindUniqueOrThrowArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosFindFirstArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamentosFindFirstArgs>(args?: SelectSubset<T, pagamentosFindFirstArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosFindFirstOrThrowArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamentos.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamentos.findMany({ take: 10 })
     * 
     * // Only select the `pagamento_id`
     * const pagamentosWithPagamento_idOnly = await prisma.pagamentos.findMany({ select: { pagamento_id: true } })
     * 
     */
    findMany<T extends pagamentosFindManyArgs>(args?: SelectSubset<T, pagamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamentos.
     * @param {pagamentosCreateArgs} args - Arguments to create a Pagamentos.
     * @example
     * // Create one Pagamentos
     * const Pagamentos = await prisma.pagamentos.create({
     *   data: {
     *     // ... data to create a Pagamentos
     *   }
     * })
     * 
     */
    create<T extends pagamentosCreateArgs>(args: SelectSubset<T, pagamentosCreateArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {pagamentosCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamentos = await prisma.pagamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamentosCreateManyArgs>(args?: SelectSubset<T, pagamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagamentos.
     * @param {pagamentosDeleteArgs} args - Arguments to delete one Pagamentos.
     * @example
     * // Delete one Pagamentos
     * const Pagamentos = await prisma.pagamentos.delete({
     *   where: {
     *     // ... filter to delete one Pagamentos
     *   }
     * })
     * 
     */
    delete<T extends pagamentosDeleteArgs>(args: SelectSubset<T, pagamentosDeleteArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamentos.
     * @param {pagamentosUpdateArgs} args - Arguments to update one Pagamentos.
     * @example
     * // Update one Pagamentos
     * const pagamentos = await prisma.pagamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamentosUpdateArgs>(args: SelectSubset<T, pagamentosUpdateArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {pagamentosDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamentosDeleteManyArgs>(args?: SelectSubset<T, pagamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamentos = await prisma.pagamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamentosUpdateManyArgs>(args: SelectSubset<T, pagamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagamentos.
     * @param {pagamentosUpsertArgs} args - Arguments to update or create a Pagamentos.
     * @example
     * // Update or create a Pagamentos
     * const pagamentos = await prisma.pagamentos.upsert({
     *   create: {
     *     // ... data to create a Pagamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamentos we want to update
     *   }
     * })
     */
    upsert<T extends pagamentosUpsertArgs>(args: SelectSubset<T, pagamentosUpsertArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamentos.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends pagamentosCountArgs>(
      args?: Subset<T, pagamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentosAggregateArgs>(args: Subset<T, PagamentosAggregateArgs>): Prisma.PrismaPromise<GetPagamentosAggregateType<T>>

    /**
     * Group by Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosGroupByArgs} args - Group by arguments.
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
      T extends pagamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamentosGroupByArgs['orderBy'] }
        : { orderBy?: pagamentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamentos model
   */
  readonly fields: pagamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamento_detalhes<T extends pagamentos$pagamento_detalhesArgs<ExtArgs> = {}>(args?: Subset<T, pagamentos$pagamento_detalhesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cupons<T extends pagamentos$cuponsArgs<ExtArgs> = {}>(args?: Subset<T, pagamentos$cuponsArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pagamentos model
   */
  interface pagamentosFieldRefs {
    readonly pagamento_id: FieldRef<"pagamentos", 'Int'>
    readonly pagamento_status: FieldRef<"pagamentos", 'Int'>
    readonly pedido_id: FieldRef<"pagamentos", 'Int'>
    readonly cupom_id: FieldRef<"pagamentos", 'Int'>
    readonly pagamentos_data: FieldRef<"pagamentos", 'DateTime'>
    readonly pagamentos_valor: FieldRef<"pagamentos", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * pagamentos findUnique
   */
  export type pagamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos findUniqueOrThrow
   */
  export type pagamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos findFirst
   */
  export type pagamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * pagamentos findFirstOrThrow
   */
  export type pagamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * pagamentos findMany
   */
  export type pagamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamentos.
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * pagamentos create
   */
  export type pagamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamentos.
     */
    data: XOR<pagamentosCreateInput, pagamentosUncheckedCreateInput>
  }

  /**
   * pagamentos createMany
   */
  export type pagamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentosCreateManyInput | pagamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamentos update
   */
  export type pagamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamentos.
     */
    data: XOR<pagamentosUpdateInput, pagamentosUncheckedUpdateInput>
    /**
     * Choose, which pagamentos to update.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos updateMany
   */
  export type pagamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentosUpdateManyMutationInput, pagamentosUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentosWhereInput
    /**
     * Limit how many pagamentos to update.
     */
    limit?: number
  }

  /**
   * pagamentos upsert
   */
  export type pagamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamentos to update in case it exists.
     */
    where: pagamentosWhereUniqueInput
    /**
     * In case the pagamentos found by the `where` argument doesn't exist, create a new pagamentos with this data.
     */
    create: XOR<pagamentosCreateInput, pagamentosUncheckedCreateInput>
    /**
     * In case the pagamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamentosUpdateInput, pagamentosUncheckedUpdateInput>
  }

  /**
   * pagamentos delete
   */
  export type pagamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter which pagamentos to delete.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos deleteMany
   */
  export type pagamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to delete
     */
    where?: pagamentosWhereInput
    /**
     * Limit how many pagamentos to delete.
     */
    limit?: number
  }

  /**
   * pagamentos.pagamento_detalhes
   */
  export type pagamentos$pagamento_detalhesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    where?: pagamento_detalhesWhereInput
    orderBy?: pagamento_detalhesOrderByWithRelationInput | pagamento_detalhesOrderByWithRelationInput[]
    cursor?: pagamento_detalhesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pagamento_detalhesScalarFieldEnum | Pagamento_detalhesScalarFieldEnum[]
  }

  /**
   * pagamentos.cupons
   */
  export type pagamentos$cuponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    where?: cuponsWhereInput
  }

  /**
   * pagamentos without action
   */
  export type pagamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
  }


  /**
   * Model pagamento_detalhes
   */

  export type AggregatePagamento_detalhes = {
    _count: Pagamento_detalhesCountAggregateOutputType | null
    _avg: Pagamento_detalhesAvgAggregateOutputType | null
    _sum: Pagamento_detalhesSumAggregateOutputType | null
    _min: Pagamento_detalhesMinAggregateOutputType | null
    _max: Pagamento_detalhesMaxAggregateOutputType | null
  }

  export type Pagamento_detalhesAvgAggregateOutputType = {
    pagamento_detalhes_id: number | null
    pagamento_detalhes_produto_id: number | null
    pagamento_detalhes_quantidade: number | null
    pagamentos_id: number | null
  }

  export type Pagamento_detalhesSumAggregateOutputType = {
    pagamento_detalhes_id: number | null
    pagamento_detalhes_produto_id: number | null
    pagamento_detalhes_quantidade: number | null
    pagamentos_id: number | null
  }

  export type Pagamento_detalhesMinAggregateOutputType = {
    pagamento_detalhes_id: number | null
    pagamento_detalhes_produto_id: number | null
    pagamento_detalhes_quantidade: number | null
    pagamentos_id: number | null
  }

  export type Pagamento_detalhesMaxAggregateOutputType = {
    pagamento_detalhes_id: number | null
    pagamento_detalhes_produto_id: number | null
    pagamento_detalhes_quantidade: number | null
    pagamentos_id: number | null
  }

  export type Pagamento_detalhesCountAggregateOutputType = {
    pagamento_detalhes_id: number
    pagamento_detalhes_produto_id: number
    pagamento_detalhes_quantidade: number
    pagamentos_id: number
    _all: number
  }


  export type Pagamento_detalhesAvgAggregateInputType = {
    pagamento_detalhes_id?: true
    pagamento_detalhes_produto_id?: true
    pagamento_detalhes_quantidade?: true
    pagamentos_id?: true
  }

  export type Pagamento_detalhesSumAggregateInputType = {
    pagamento_detalhes_id?: true
    pagamento_detalhes_produto_id?: true
    pagamento_detalhes_quantidade?: true
    pagamentos_id?: true
  }

  export type Pagamento_detalhesMinAggregateInputType = {
    pagamento_detalhes_id?: true
    pagamento_detalhes_produto_id?: true
    pagamento_detalhes_quantidade?: true
    pagamentos_id?: true
  }

  export type Pagamento_detalhesMaxAggregateInputType = {
    pagamento_detalhes_id?: true
    pagamento_detalhes_produto_id?: true
    pagamento_detalhes_quantidade?: true
    pagamentos_id?: true
  }

  export type Pagamento_detalhesCountAggregateInputType = {
    pagamento_detalhes_id?: true
    pagamento_detalhes_produto_id?: true
    pagamento_detalhes_quantidade?: true
    pagamentos_id?: true
    _all?: true
  }

  export type Pagamento_detalhesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamento_detalhes to aggregate.
     */
    where?: pagamento_detalhesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamento_detalhes to fetch.
     */
    orderBy?: pagamento_detalhesOrderByWithRelationInput | pagamento_detalhesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamento_detalhesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamento_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamento_detalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamento_detalhes
    **/
    _count?: true | Pagamento_detalhesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pagamento_detalhesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pagamento_detalhesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pagamento_detalhesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pagamento_detalhesMaxAggregateInputType
  }

  export type GetPagamento_detalhesAggregateType<T extends Pagamento_detalhesAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento_detalhes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento_detalhes[P]>
      : GetScalarType<T[P], AggregatePagamento_detalhes[P]>
  }




  export type pagamento_detalhesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamento_detalhesWhereInput
    orderBy?: pagamento_detalhesOrderByWithAggregationInput | pagamento_detalhesOrderByWithAggregationInput[]
    by: Pagamento_detalhesScalarFieldEnum[] | Pagamento_detalhesScalarFieldEnum
    having?: pagamento_detalhesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pagamento_detalhesCountAggregateInputType | true
    _avg?: Pagamento_detalhesAvgAggregateInputType
    _sum?: Pagamento_detalhesSumAggregateInputType
    _min?: Pagamento_detalhesMinAggregateInputType
    _max?: Pagamento_detalhesMaxAggregateInputType
  }

  export type Pagamento_detalhesGroupByOutputType = {
    pagamento_detalhes_id: number
    pagamento_detalhes_produto_id: number | null
    pagamento_detalhes_quantidade: number
    pagamentos_id: number
    _count: Pagamento_detalhesCountAggregateOutputType | null
    _avg: Pagamento_detalhesAvgAggregateOutputType | null
    _sum: Pagamento_detalhesSumAggregateOutputType | null
    _min: Pagamento_detalhesMinAggregateOutputType | null
    _max: Pagamento_detalhesMaxAggregateOutputType | null
  }

  type GetPagamento_detalhesGroupByPayload<T extends pagamento_detalhesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pagamento_detalhesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pagamento_detalhesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pagamento_detalhesGroupByOutputType[P]>
            : GetScalarType<T[P], Pagamento_detalhesGroupByOutputType[P]>
        }
      >
    >


  export type pagamento_detalhesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_detalhes_id?: boolean
    pagamento_detalhes_produto_id?: boolean
    pagamento_detalhes_quantidade?: boolean
    pagamentos_id?: boolean
    pagamentos?: boolean | pagamentosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento_detalhes"]>



  export type pagamento_detalhesSelectScalar = {
    pagamento_detalhes_id?: boolean
    pagamento_detalhes_produto_id?: boolean
    pagamento_detalhes_quantidade?: boolean
    pagamentos_id?: boolean
  }

  export type pagamento_detalhesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pagamento_detalhes_id" | "pagamento_detalhes_produto_id" | "pagamento_detalhes_quantidade" | "pagamentos_id", ExtArgs["result"]["pagamento_detalhes"]>
  export type pagamento_detalhesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | pagamentosDefaultArgs<ExtArgs>
  }

  export type $pagamento_detalhesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamento_detalhes"
    objects: {
      pagamentos: Prisma.$pagamentosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pagamento_detalhes_id: number
      pagamento_detalhes_produto_id: number | null
      pagamento_detalhes_quantidade: number
      pagamentos_id: number
    }, ExtArgs["result"]["pagamento_detalhes"]>
    composites: {}
  }

  type pagamento_detalhesGetPayload<S extends boolean | null | undefined | pagamento_detalhesDefaultArgs> = $Result.GetResult<Prisma.$pagamento_detalhesPayload, S>

  type pagamento_detalhesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagamento_detalhesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pagamento_detalhesCountAggregateInputType | true
    }

  export interface pagamento_detalhesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamento_detalhes'], meta: { name: 'pagamento_detalhes' } }
    /**
     * Find zero or one Pagamento_detalhes that matches the filter.
     * @param {pagamento_detalhesFindUniqueArgs} args - Arguments to find a Pagamento_detalhes
     * @example
     * // Get one Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamento_detalhesFindUniqueArgs>(args: SelectSubset<T, pagamento_detalhesFindUniqueArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento_detalhes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagamento_detalhesFindUniqueOrThrowArgs} args - Arguments to find a Pagamento_detalhes
     * @example
     * // Get one Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamento_detalhesFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamento_detalhesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento_detalhes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamento_detalhesFindFirstArgs} args - Arguments to find a Pagamento_detalhes
     * @example
     * // Get one Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamento_detalhesFindFirstArgs>(args?: SelectSubset<T, pagamento_detalhesFindFirstArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento_detalhes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamento_detalhesFindFirstOrThrowArgs} args - Arguments to find a Pagamento_detalhes
     * @example
     * // Get one Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamento_detalhesFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamento_detalhesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamento_detalhes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamento_detalhesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.findMany()
     * 
     * // Get first 10 Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.findMany({ take: 10 })
     * 
     * // Only select the `pagamento_detalhes_id`
     * const pagamento_detalhesWithPagamento_detalhes_idOnly = await prisma.pagamento_detalhes.findMany({ select: { pagamento_detalhes_id: true } })
     * 
     */
    findMany<T extends pagamento_detalhesFindManyArgs>(args?: SelectSubset<T, pagamento_detalhesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento_detalhes.
     * @param {pagamento_detalhesCreateArgs} args - Arguments to create a Pagamento_detalhes.
     * @example
     * // Create one Pagamento_detalhes
     * const Pagamento_detalhes = await prisma.pagamento_detalhes.create({
     *   data: {
     *     // ... data to create a Pagamento_detalhes
     *   }
     * })
     * 
     */
    create<T extends pagamento_detalhesCreateArgs>(args: SelectSubset<T, pagamento_detalhesCreateArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamento_detalhes.
     * @param {pagamento_detalhesCreateManyArgs} args - Arguments to create many Pagamento_detalhes.
     * @example
     * // Create many Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamento_detalhesCreateManyArgs>(args?: SelectSubset<T, pagamento_detalhesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagamento_detalhes.
     * @param {pagamento_detalhesDeleteArgs} args - Arguments to delete one Pagamento_detalhes.
     * @example
     * // Delete one Pagamento_detalhes
     * const Pagamento_detalhes = await prisma.pagamento_detalhes.delete({
     *   where: {
     *     // ... filter to delete one Pagamento_detalhes
     *   }
     * })
     * 
     */
    delete<T extends pagamento_detalhesDeleteArgs>(args: SelectSubset<T, pagamento_detalhesDeleteArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento_detalhes.
     * @param {pagamento_detalhesUpdateArgs} args - Arguments to update one Pagamento_detalhes.
     * @example
     * // Update one Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamento_detalhesUpdateArgs>(args: SelectSubset<T, pagamento_detalhesUpdateArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamento_detalhes.
     * @param {pagamento_detalhesDeleteManyArgs} args - Arguments to filter Pagamento_detalhes to delete.
     * @example
     * // Delete a few Pagamento_detalhes
     * const { count } = await prisma.pagamento_detalhes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamento_detalhesDeleteManyArgs>(args?: SelectSubset<T, pagamento_detalhesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamento_detalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamento_detalhesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamento_detalhesUpdateManyArgs>(args: SelectSubset<T, pagamento_detalhesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagamento_detalhes.
     * @param {pagamento_detalhesUpsertArgs} args - Arguments to update or create a Pagamento_detalhes.
     * @example
     * // Update or create a Pagamento_detalhes
     * const pagamento_detalhes = await prisma.pagamento_detalhes.upsert({
     *   create: {
     *     // ... data to create a Pagamento_detalhes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento_detalhes we want to update
     *   }
     * })
     */
    upsert<T extends pagamento_detalhesUpsertArgs>(args: SelectSubset<T, pagamento_detalhesUpsertArgs<ExtArgs>>): Prisma__pagamento_detalhesClient<$Result.GetResult<Prisma.$pagamento_detalhesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamento_detalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamento_detalhesCountArgs} args - Arguments to filter Pagamento_detalhes to count.
     * @example
     * // Count the number of Pagamento_detalhes
     * const count = await prisma.pagamento_detalhes.count({
     *   where: {
     *     // ... the filter for the Pagamento_detalhes we want to count
     *   }
     * })
    **/
    count<T extends pagamento_detalhesCountArgs>(
      args?: Subset<T, pagamento_detalhesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pagamento_detalhesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento_detalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pagamento_detalhesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pagamento_detalhesAggregateArgs>(args: Subset<T, Pagamento_detalhesAggregateArgs>): Prisma.PrismaPromise<GetPagamento_detalhesAggregateType<T>>

    /**
     * Group by Pagamento_detalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamento_detalhesGroupByArgs} args - Group by arguments.
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
      T extends pagamento_detalhesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamento_detalhesGroupByArgs['orderBy'] }
        : { orderBy?: pagamento_detalhesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamento_detalhesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamento_detalhesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamento_detalhes model
   */
  readonly fields: pagamento_detalhesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamento_detalhes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamento_detalhesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamentos<T extends pagamentosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pagamentosDefaultArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pagamento_detalhes model
   */
  interface pagamento_detalhesFieldRefs {
    readonly pagamento_detalhes_id: FieldRef<"pagamento_detalhes", 'Int'>
    readonly pagamento_detalhes_produto_id: FieldRef<"pagamento_detalhes", 'Int'>
    readonly pagamento_detalhes_quantidade: FieldRef<"pagamento_detalhes", 'Int'>
    readonly pagamentos_id: FieldRef<"pagamento_detalhes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pagamento_detalhes findUnique
   */
  export type pagamento_detalhesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * Filter, which pagamento_detalhes to fetch.
     */
    where: pagamento_detalhesWhereUniqueInput
  }

  /**
   * pagamento_detalhes findUniqueOrThrow
   */
  export type pagamento_detalhesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * Filter, which pagamento_detalhes to fetch.
     */
    where: pagamento_detalhesWhereUniqueInput
  }

  /**
   * pagamento_detalhes findFirst
   */
  export type pagamento_detalhesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * Filter, which pagamento_detalhes to fetch.
     */
    where?: pagamento_detalhesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamento_detalhes to fetch.
     */
    orderBy?: pagamento_detalhesOrderByWithRelationInput | pagamento_detalhesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamento_detalhes.
     */
    cursor?: pagamento_detalhesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamento_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamento_detalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamento_detalhes.
     */
    distinct?: Pagamento_detalhesScalarFieldEnum | Pagamento_detalhesScalarFieldEnum[]
  }

  /**
   * pagamento_detalhes findFirstOrThrow
   */
  export type pagamento_detalhesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * Filter, which pagamento_detalhes to fetch.
     */
    where?: pagamento_detalhesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamento_detalhes to fetch.
     */
    orderBy?: pagamento_detalhesOrderByWithRelationInput | pagamento_detalhesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamento_detalhes.
     */
    cursor?: pagamento_detalhesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamento_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamento_detalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamento_detalhes.
     */
    distinct?: Pagamento_detalhesScalarFieldEnum | Pagamento_detalhesScalarFieldEnum[]
  }

  /**
   * pagamento_detalhes findMany
   */
  export type pagamento_detalhesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * Filter, which pagamento_detalhes to fetch.
     */
    where?: pagamento_detalhesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamento_detalhes to fetch.
     */
    orderBy?: pagamento_detalhesOrderByWithRelationInput | pagamento_detalhesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamento_detalhes.
     */
    cursor?: pagamento_detalhesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamento_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamento_detalhes.
     */
    skip?: number
    distinct?: Pagamento_detalhesScalarFieldEnum | Pagamento_detalhesScalarFieldEnum[]
  }

  /**
   * pagamento_detalhes create
   */
  export type pagamento_detalhesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamento_detalhes.
     */
    data: XOR<pagamento_detalhesCreateInput, pagamento_detalhesUncheckedCreateInput>
  }

  /**
   * pagamento_detalhes createMany
   */
  export type pagamento_detalhesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamento_detalhes.
     */
    data: pagamento_detalhesCreateManyInput | pagamento_detalhesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamento_detalhes update
   */
  export type pagamento_detalhesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamento_detalhes.
     */
    data: XOR<pagamento_detalhesUpdateInput, pagamento_detalhesUncheckedUpdateInput>
    /**
     * Choose, which pagamento_detalhes to update.
     */
    where: pagamento_detalhesWhereUniqueInput
  }

  /**
   * pagamento_detalhes updateMany
   */
  export type pagamento_detalhesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamento_detalhes.
     */
    data: XOR<pagamento_detalhesUpdateManyMutationInput, pagamento_detalhesUncheckedUpdateManyInput>
    /**
     * Filter which pagamento_detalhes to update
     */
    where?: pagamento_detalhesWhereInput
    /**
     * Limit how many pagamento_detalhes to update.
     */
    limit?: number
  }

  /**
   * pagamento_detalhes upsert
   */
  export type pagamento_detalhesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamento_detalhes to update in case it exists.
     */
    where: pagamento_detalhesWhereUniqueInput
    /**
     * In case the pagamento_detalhes found by the `where` argument doesn't exist, create a new pagamento_detalhes with this data.
     */
    create: XOR<pagamento_detalhesCreateInput, pagamento_detalhesUncheckedCreateInput>
    /**
     * In case the pagamento_detalhes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamento_detalhesUpdateInput, pagamento_detalhesUncheckedUpdateInput>
  }

  /**
   * pagamento_detalhes delete
   */
  export type pagamento_detalhesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
    /**
     * Filter which pagamento_detalhes to delete.
     */
    where: pagamento_detalhesWhereUniqueInput
  }

  /**
   * pagamento_detalhes deleteMany
   */
  export type pagamento_detalhesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamento_detalhes to delete
     */
    where?: pagamento_detalhesWhereInput
    /**
     * Limit how many pagamento_detalhes to delete.
     */
    limit?: number
  }

  /**
   * pagamento_detalhes without action
   */
  export type pagamento_detalhesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento_detalhes
     */
    select?: pagamento_detalhesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento_detalhes
     */
    omit?: pagamento_detalhesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamento_detalhesInclude<ExtArgs> | null
  }


  /**
   * Model cupons
   */

  export type AggregateCupons = {
    _count: CuponsCountAggregateOutputType | null
    _avg: CuponsAvgAggregateOutputType | null
    _sum: CuponsSumAggregateOutputType | null
    _min: CuponsMinAggregateOutputType | null
    _max: CuponsMaxAggregateOutputType | null
  }

  export type CuponsAvgAggregateOutputType = {
    cupom_id: number | null
    cupom_desconto: Decimal | null
    cupom_status: number | null
  }

  export type CuponsSumAggregateOutputType = {
    cupom_id: number | null
    cupom_desconto: Decimal | null
    cupom_status: number | null
  }

  export type CuponsMinAggregateOutputType = {
    cupom_id: number | null
    cupom_codigo: string | null
    cupom_desconto: Decimal | null
    cupom_status: number | null
  }

  export type CuponsMaxAggregateOutputType = {
    cupom_id: number | null
    cupom_codigo: string | null
    cupom_desconto: Decimal | null
    cupom_status: number | null
  }

  export type CuponsCountAggregateOutputType = {
    cupom_id: number
    cupom_codigo: number
    cupom_desconto: number
    cupom_status: number
    _all: number
  }


  export type CuponsAvgAggregateInputType = {
    cupom_id?: true
    cupom_desconto?: true
    cupom_status?: true
  }

  export type CuponsSumAggregateInputType = {
    cupom_id?: true
    cupom_desconto?: true
    cupom_status?: true
  }

  export type CuponsMinAggregateInputType = {
    cupom_id?: true
    cupom_codigo?: true
    cupom_desconto?: true
    cupom_status?: true
  }

  export type CuponsMaxAggregateInputType = {
    cupom_id?: true
    cupom_codigo?: true
    cupom_desconto?: true
    cupom_status?: true
  }

  export type CuponsCountAggregateInputType = {
    cupom_id?: true
    cupom_codigo?: true
    cupom_desconto?: true
    cupom_status?: true
    _all?: true
  }

  export type CuponsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cupons to aggregate.
     */
    where?: cuponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupons to fetch.
     */
    orderBy?: cuponsOrderByWithRelationInput | cuponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cupons
    **/
    _count?: true | CuponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuponsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuponsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuponsMaxAggregateInputType
  }

  export type GetCuponsAggregateType<T extends CuponsAggregateArgs> = {
        [P in keyof T & keyof AggregateCupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCupons[P]>
      : GetScalarType<T[P], AggregateCupons[P]>
  }




  export type cuponsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuponsWhereInput
    orderBy?: cuponsOrderByWithAggregationInput | cuponsOrderByWithAggregationInput[]
    by: CuponsScalarFieldEnum[] | CuponsScalarFieldEnum
    having?: cuponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuponsCountAggregateInputType | true
    _avg?: CuponsAvgAggregateInputType
    _sum?: CuponsSumAggregateInputType
    _min?: CuponsMinAggregateInputType
    _max?: CuponsMaxAggregateInputType
  }

  export type CuponsGroupByOutputType = {
    cupom_id: number
    cupom_codigo: string
    cupom_desconto: Decimal
    cupom_status: number
    _count: CuponsCountAggregateOutputType | null
    _avg: CuponsAvgAggregateOutputType | null
    _sum: CuponsSumAggregateOutputType | null
    _min: CuponsMinAggregateOutputType | null
    _max: CuponsMaxAggregateOutputType | null
  }

  type GetCuponsGroupByPayload<T extends cuponsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuponsGroupByOutputType[P]>
            : GetScalarType<T[P], CuponsGroupByOutputType[P]>
        }
      >
    >


  export type cuponsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cupom_id?: boolean
    cupom_codigo?: boolean
    cupom_desconto?: boolean
    cupom_status?: boolean
    pagamentos?: boolean | cupons$pagamentosArgs<ExtArgs>
    _count?: boolean | CuponsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cupons"]>



  export type cuponsSelectScalar = {
    cupom_id?: boolean
    cupom_codigo?: boolean
    cupom_desconto?: boolean
    cupom_status?: boolean
  }

  export type cuponsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cupom_id" | "cupom_codigo" | "cupom_desconto" | "cupom_status", ExtArgs["result"]["cupons"]>
  export type cuponsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | cupons$pagamentosArgs<ExtArgs>
    _count?: boolean | CuponsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cuponsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cupons"
    objects: {
      pagamentos: Prisma.$pagamentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cupom_id: number
      cupom_codigo: string
      cupom_desconto: Prisma.Decimal
      cupom_status: number
    }, ExtArgs["result"]["cupons"]>
    composites: {}
  }

  type cuponsGetPayload<S extends boolean | null | undefined | cuponsDefaultArgs> = $Result.GetResult<Prisma.$cuponsPayload, S>

  type cuponsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cuponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuponsCountAggregateInputType | true
    }

  export interface cuponsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cupons'], meta: { name: 'cupons' } }
    /**
     * Find zero or one Cupons that matches the filter.
     * @param {cuponsFindUniqueArgs} args - Arguments to find a Cupons
     * @example
     * // Get one Cupons
     * const cupons = await prisma.cupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuponsFindUniqueArgs>(args: SelectSubset<T, cuponsFindUniqueArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cupons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuponsFindUniqueOrThrowArgs} args - Arguments to find a Cupons
     * @example
     * // Get one Cupons
     * const cupons = await prisma.cupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuponsFindUniqueOrThrowArgs>(args: SelectSubset<T, cuponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuponsFindFirstArgs} args - Arguments to find a Cupons
     * @example
     * // Get one Cupons
     * const cupons = await prisma.cupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuponsFindFirstArgs>(args?: SelectSubset<T, cuponsFindFirstArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cupons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuponsFindFirstOrThrowArgs} args - Arguments to find a Cupons
     * @example
     * // Get one Cupons
     * const cupons = await prisma.cupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuponsFindFirstOrThrowArgs>(args?: SelectSubset<T, cuponsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuponsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cupons
     * const cupons = await prisma.cupons.findMany()
     * 
     * // Get first 10 Cupons
     * const cupons = await prisma.cupons.findMany({ take: 10 })
     * 
     * // Only select the `cupom_id`
     * const cuponsWithCupom_idOnly = await prisma.cupons.findMany({ select: { cupom_id: true } })
     * 
     */
    findMany<T extends cuponsFindManyArgs>(args?: SelectSubset<T, cuponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cupons.
     * @param {cuponsCreateArgs} args - Arguments to create a Cupons.
     * @example
     * // Create one Cupons
     * const Cupons = await prisma.cupons.create({
     *   data: {
     *     // ... data to create a Cupons
     *   }
     * })
     * 
     */
    create<T extends cuponsCreateArgs>(args: SelectSubset<T, cuponsCreateArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cupons.
     * @param {cuponsCreateManyArgs} args - Arguments to create many Cupons.
     * @example
     * // Create many Cupons
     * const cupons = await prisma.cupons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuponsCreateManyArgs>(args?: SelectSubset<T, cuponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cupons.
     * @param {cuponsDeleteArgs} args - Arguments to delete one Cupons.
     * @example
     * // Delete one Cupons
     * const Cupons = await prisma.cupons.delete({
     *   where: {
     *     // ... filter to delete one Cupons
     *   }
     * })
     * 
     */
    delete<T extends cuponsDeleteArgs>(args: SelectSubset<T, cuponsDeleteArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cupons.
     * @param {cuponsUpdateArgs} args - Arguments to update one Cupons.
     * @example
     * // Update one Cupons
     * const cupons = await prisma.cupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuponsUpdateArgs>(args: SelectSubset<T, cuponsUpdateArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cupons.
     * @param {cuponsDeleteManyArgs} args - Arguments to filter Cupons to delete.
     * @example
     * // Delete a few Cupons
     * const { count } = await prisma.cupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuponsDeleteManyArgs>(args?: SelectSubset<T, cuponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cupons
     * const cupons = await prisma.cupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuponsUpdateManyArgs>(args: SelectSubset<T, cuponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cupons.
     * @param {cuponsUpsertArgs} args - Arguments to update or create a Cupons.
     * @example
     * // Update or create a Cupons
     * const cupons = await prisma.cupons.upsert({
     *   create: {
     *     // ... data to create a Cupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cupons we want to update
     *   }
     * })
     */
    upsert<T extends cuponsUpsertArgs>(args: SelectSubset<T, cuponsUpsertArgs<ExtArgs>>): Prisma__cuponsClient<$Result.GetResult<Prisma.$cuponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuponsCountArgs} args - Arguments to filter Cupons to count.
     * @example
     * // Count the number of Cupons
     * const count = await prisma.cupons.count({
     *   where: {
     *     // ... the filter for the Cupons we want to count
     *   }
     * })
    **/
    count<T extends cuponsCountArgs>(
      args?: Subset<T, cuponsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuponsAggregateArgs>(args: Subset<T, CuponsAggregateArgs>): Prisma.PrismaPromise<GetCuponsAggregateType<T>>

    /**
     * Group by Cupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuponsGroupByArgs} args - Group by arguments.
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
      T extends cuponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuponsGroupByArgs['orderBy'] }
        : { orderBy?: cuponsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cuponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cupons model
   */
  readonly fields: cuponsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuponsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamentos<T extends cupons$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, cupons$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cupons model
   */
  interface cuponsFieldRefs {
    readonly cupom_id: FieldRef<"cupons", 'Int'>
    readonly cupom_codigo: FieldRef<"cupons", 'String'>
    readonly cupom_desconto: FieldRef<"cupons", 'Decimal'>
    readonly cupom_status: FieldRef<"cupons", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cupons findUnique
   */
  export type cuponsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * Filter, which cupons to fetch.
     */
    where: cuponsWhereUniqueInput
  }

  /**
   * cupons findUniqueOrThrow
   */
  export type cuponsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * Filter, which cupons to fetch.
     */
    where: cuponsWhereUniqueInput
  }

  /**
   * cupons findFirst
   */
  export type cuponsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * Filter, which cupons to fetch.
     */
    where?: cuponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupons to fetch.
     */
    orderBy?: cuponsOrderByWithRelationInput | cuponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cupons.
     */
    cursor?: cuponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cupons.
     */
    distinct?: CuponsScalarFieldEnum | CuponsScalarFieldEnum[]
  }

  /**
   * cupons findFirstOrThrow
   */
  export type cuponsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * Filter, which cupons to fetch.
     */
    where?: cuponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupons to fetch.
     */
    orderBy?: cuponsOrderByWithRelationInput | cuponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cupons.
     */
    cursor?: cuponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cupons.
     */
    distinct?: CuponsScalarFieldEnum | CuponsScalarFieldEnum[]
  }

  /**
   * cupons findMany
   */
  export type cuponsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * Filter, which cupons to fetch.
     */
    where?: cuponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupons to fetch.
     */
    orderBy?: cuponsOrderByWithRelationInput | cuponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cupons.
     */
    cursor?: cuponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupons.
     */
    skip?: number
    distinct?: CuponsScalarFieldEnum | CuponsScalarFieldEnum[]
  }

  /**
   * cupons create
   */
  export type cuponsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * The data needed to create a cupons.
     */
    data: XOR<cuponsCreateInput, cuponsUncheckedCreateInput>
  }

  /**
   * cupons createMany
   */
  export type cuponsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cupons.
     */
    data: cuponsCreateManyInput | cuponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cupons update
   */
  export type cuponsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * The data needed to update a cupons.
     */
    data: XOR<cuponsUpdateInput, cuponsUncheckedUpdateInput>
    /**
     * Choose, which cupons to update.
     */
    where: cuponsWhereUniqueInput
  }

  /**
   * cupons updateMany
   */
  export type cuponsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cupons.
     */
    data: XOR<cuponsUpdateManyMutationInput, cuponsUncheckedUpdateManyInput>
    /**
     * Filter which cupons to update
     */
    where?: cuponsWhereInput
    /**
     * Limit how many cupons to update.
     */
    limit?: number
  }

  /**
   * cupons upsert
   */
  export type cuponsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * The filter to search for the cupons to update in case it exists.
     */
    where: cuponsWhereUniqueInput
    /**
     * In case the cupons found by the `where` argument doesn't exist, create a new cupons with this data.
     */
    create: XOR<cuponsCreateInput, cuponsUncheckedCreateInput>
    /**
     * In case the cupons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuponsUpdateInput, cuponsUncheckedUpdateInput>
  }

  /**
   * cupons delete
   */
  export type cuponsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
    /**
     * Filter which cupons to delete.
     */
    where: cuponsWhereUniqueInput
  }

  /**
   * cupons deleteMany
   */
  export type cuponsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cupons to delete
     */
    where?: cuponsWhereInput
    /**
     * Limit how many cupons to delete.
     */
    limit?: number
  }

  /**
   * cupons.pagamentos
   */
  export type cupons$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamentos
     */
    omit?: pagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    where?: pagamentosWhereInput
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    cursor?: pagamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * cupons without action
   */
  export type cuponsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupons
     */
    select?: cuponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupons
     */
    omit?: cuponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuponsInclude<ExtArgs> | null
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


  export const PagamentosScalarFieldEnum: {
    pagamento_id: 'pagamento_id',
    pagamento_status: 'pagamento_status',
    pedido_id: 'pedido_id',
    cupom_id: 'cupom_id',
    pagamentos_data: 'pagamentos_data',
    pagamentos_valor: 'pagamentos_valor'
  };

  export type PagamentosScalarFieldEnum = (typeof PagamentosScalarFieldEnum)[keyof typeof PagamentosScalarFieldEnum]


  export const Pagamento_detalhesScalarFieldEnum: {
    pagamento_detalhes_id: 'pagamento_detalhes_id',
    pagamento_detalhes_produto_id: 'pagamento_detalhes_produto_id',
    pagamento_detalhes_quantidade: 'pagamento_detalhes_quantidade',
    pagamentos_id: 'pagamentos_id'
  };

  export type Pagamento_detalhesScalarFieldEnum = (typeof Pagamento_detalhesScalarFieldEnum)[keyof typeof Pagamento_detalhesScalarFieldEnum]


  export const CuponsScalarFieldEnum: {
    cupom_id: 'cupom_id',
    cupom_codigo: 'cupom_codigo',
    cupom_desconto: 'cupom_desconto',
    cupom_status: 'cupom_status'
  };

  export type CuponsScalarFieldEnum = (typeof CuponsScalarFieldEnum)[keyof typeof CuponsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cuponsOrderByRelevanceFieldEnum: {
    cupom_codigo: 'cupom_codigo'
  };

  export type cuponsOrderByRelevanceFieldEnum = (typeof cuponsOrderByRelevanceFieldEnum)[keyof typeof cuponsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type pagamentosWhereInput = {
    AND?: pagamentosWhereInput | pagamentosWhereInput[]
    OR?: pagamentosWhereInput[]
    NOT?: pagamentosWhereInput | pagamentosWhereInput[]
    pagamento_id?: IntFilter<"pagamentos"> | number
    pagamento_status?: IntFilter<"pagamentos"> | number
    pedido_id?: IntFilter<"pagamentos"> | number
    cupom_id?: IntNullableFilter<"pagamentos"> | number | null
    pagamentos_data?: DateTimeFilter<"pagamentos"> | Date | string
    pagamentos_valor?: DecimalNullableFilter<"pagamentos"> | Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: Pagamento_detalhesListRelationFilter
    cupons?: XOR<CuponsNullableScalarRelationFilter, cuponsWhereInput> | null
  }

  export type pagamentosOrderByWithRelationInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrderInput | SortOrder
    pagamentos_data?: SortOrder
    pagamentos_valor?: SortOrderInput | SortOrder
    pagamento_detalhes?: pagamento_detalhesOrderByRelationAggregateInput
    cupons?: cuponsOrderByWithRelationInput
  }

  export type pagamentosWhereUniqueInput = Prisma.AtLeast<{
    pagamento_id?: number
    AND?: pagamentosWhereInput | pagamentosWhereInput[]
    OR?: pagamentosWhereInput[]
    NOT?: pagamentosWhereInput | pagamentosWhereInput[]
    pagamento_status?: IntFilter<"pagamentos"> | number
    pedido_id?: IntFilter<"pagamentos"> | number
    cupom_id?: IntNullableFilter<"pagamentos"> | number | null
    pagamentos_data?: DateTimeFilter<"pagamentos"> | Date | string
    pagamentos_valor?: DecimalNullableFilter<"pagamentos"> | Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: Pagamento_detalhesListRelationFilter
    cupons?: XOR<CuponsNullableScalarRelationFilter, cuponsWhereInput> | null
  }, "pagamento_id" | "pagamento_id">

  export type pagamentosOrderByWithAggregationInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrderInput | SortOrder
    pagamentos_data?: SortOrder
    pagamentos_valor?: SortOrderInput | SortOrder
    _count?: pagamentosCountOrderByAggregateInput
    _avg?: pagamentosAvgOrderByAggregateInput
    _max?: pagamentosMaxOrderByAggregateInput
    _min?: pagamentosMinOrderByAggregateInput
    _sum?: pagamentosSumOrderByAggregateInput
  }

  export type pagamentosScalarWhereWithAggregatesInput = {
    AND?: pagamentosScalarWhereWithAggregatesInput | pagamentosScalarWhereWithAggregatesInput[]
    OR?: pagamentosScalarWhereWithAggregatesInput[]
    NOT?: pagamentosScalarWhereWithAggregatesInput | pagamentosScalarWhereWithAggregatesInput[]
    pagamento_id?: IntWithAggregatesFilter<"pagamentos"> | number
    pagamento_status?: IntWithAggregatesFilter<"pagamentos"> | number
    pedido_id?: IntWithAggregatesFilter<"pagamentos"> | number
    cupom_id?: IntNullableWithAggregatesFilter<"pagamentos"> | number | null
    pagamentos_data?: DateTimeWithAggregatesFilter<"pagamentos"> | Date | string
    pagamentos_valor?: DecimalNullableWithAggregatesFilter<"pagamentos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type pagamento_detalhesWhereInput = {
    AND?: pagamento_detalhesWhereInput | pagamento_detalhesWhereInput[]
    OR?: pagamento_detalhesWhereInput[]
    NOT?: pagamento_detalhesWhereInput | pagamento_detalhesWhereInput[]
    pagamento_detalhes_id?: IntFilter<"pagamento_detalhes"> | number
    pagamento_detalhes_produto_id?: IntNullableFilter<"pagamento_detalhes"> | number | null
    pagamento_detalhes_quantidade?: IntFilter<"pagamento_detalhes"> | number
    pagamentos_id?: IntFilter<"pagamento_detalhes"> | number
    pagamentos?: XOR<PagamentosScalarRelationFilter, pagamentosWhereInput>
  }

  export type pagamento_detalhesOrderByWithRelationInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrderInput | SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
    pagamentos?: pagamentosOrderByWithRelationInput
  }

  export type pagamento_detalhesWhereUniqueInput = Prisma.AtLeast<{
    pagamento_detalhes_id?: number
    AND?: pagamento_detalhesWhereInput | pagamento_detalhesWhereInput[]
    OR?: pagamento_detalhesWhereInput[]
    NOT?: pagamento_detalhesWhereInput | pagamento_detalhesWhereInput[]
    pagamento_detalhes_produto_id?: IntNullableFilter<"pagamento_detalhes"> | number | null
    pagamento_detalhes_quantidade?: IntFilter<"pagamento_detalhes"> | number
    pagamentos_id?: IntFilter<"pagamento_detalhes"> | number
    pagamentos?: XOR<PagamentosScalarRelationFilter, pagamentosWhereInput>
  }, "pagamento_detalhes_id">

  export type pagamento_detalhesOrderByWithAggregationInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrderInput | SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
    _count?: pagamento_detalhesCountOrderByAggregateInput
    _avg?: pagamento_detalhesAvgOrderByAggregateInput
    _max?: pagamento_detalhesMaxOrderByAggregateInput
    _min?: pagamento_detalhesMinOrderByAggregateInput
    _sum?: pagamento_detalhesSumOrderByAggregateInput
  }

  export type pagamento_detalhesScalarWhereWithAggregatesInput = {
    AND?: pagamento_detalhesScalarWhereWithAggregatesInput | pagamento_detalhesScalarWhereWithAggregatesInput[]
    OR?: pagamento_detalhesScalarWhereWithAggregatesInput[]
    NOT?: pagamento_detalhesScalarWhereWithAggregatesInput | pagamento_detalhesScalarWhereWithAggregatesInput[]
    pagamento_detalhes_id?: IntWithAggregatesFilter<"pagamento_detalhes"> | number
    pagamento_detalhes_produto_id?: IntNullableWithAggregatesFilter<"pagamento_detalhes"> | number | null
    pagamento_detalhes_quantidade?: IntWithAggregatesFilter<"pagamento_detalhes"> | number
    pagamentos_id?: IntWithAggregatesFilter<"pagamento_detalhes"> | number
  }

  export type cuponsWhereInput = {
    AND?: cuponsWhereInput | cuponsWhereInput[]
    OR?: cuponsWhereInput[]
    NOT?: cuponsWhereInput | cuponsWhereInput[]
    cupom_id?: IntFilter<"cupons"> | number
    cupom_codigo?: StringFilter<"cupons"> | string
    cupom_desconto?: DecimalFilter<"cupons"> | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFilter<"cupons"> | number
    pagamentos?: PagamentosListRelationFilter
  }

  export type cuponsOrderByWithRelationInput = {
    cupom_id?: SortOrder
    cupom_codigo?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
    pagamentos?: pagamentosOrderByRelationAggregateInput
    _relevance?: cuponsOrderByRelevanceInput
  }

  export type cuponsWhereUniqueInput = Prisma.AtLeast<{
    cupom_id?: number
    cupom_codigo?: string
    AND?: cuponsWhereInput | cuponsWhereInput[]
    OR?: cuponsWhereInput[]
    NOT?: cuponsWhereInput | cuponsWhereInput[]
    cupom_desconto?: DecimalFilter<"cupons"> | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFilter<"cupons"> | number
    pagamentos?: PagamentosListRelationFilter
  }, "cupom_id" | "cupom_id" | "cupom_codigo">

  export type cuponsOrderByWithAggregationInput = {
    cupom_id?: SortOrder
    cupom_codigo?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
    _count?: cuponsCountOrderByAggregateInput
    _avg?: cuponsAvgOrderByAggregateInput
    _max?: cuponsMaxOrderByAggregateInput
    _min?: cuponsMinOrderByAggregateInput
    _sum?: cuponsSumOrderByAggregateInput
  }

  export type cuponsScalarWhereWithAggregatesInput = {
    AND?: cuponsScalarWhereWithAggregatesInput | cuponsScalarWhereWithAggregatesInput[]
    OR?: cuponsScalarWhereWithAggregatesInput[]
    NOT?: cuponsScalarWhereWithAggregatesInput | cuponsScalarWhereWithAggregatesInput[]
    cupom_id?: IntWithAggregatesFilter<"cupons"> | number
    cupom_codigo?: StringWithAggregatesFilter<"cupons"> | string
    cupom_desconto?: DecimalWithAggregatesFilter<"cupons"> | Decimal | DecimalJsLike | number | string
    cupom_status?: IntWithAggregatesFilter<"cupons"> | number
  }

  export type pagamentosCreateInput = {
    pagamento_status?: number
    pedido_id: number
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesCreateNestedManyWithoutPagamentosInput
    cupons?: cuponsCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentosUncheckedCreateInput = {
    pagamento_id?: number
    pagamento_status?: number
    pedido_id: number
    cupom_id?: number | null
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesUncheckedCreateNestedManyWithoutPagamentosInput
  }

  export type pagamentosUpdateInput = {
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesUpdateManyWithoutPagamentosNestedInput
    cupons?: cuponsUpdateOneWithoutPagamentosNestedInput
  }

  export type pagamentosUncheckedUpdateInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cupom_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesUncheckedUpdateManyWithoutPagamentosNestedInput
  }

  export type pagamentosCreateManyInput = {
    pagamento_id?: number
    pagamento_status?: number
    pedido_id: number
    cupom_id?: number | null
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
  }

  export type pagamentosUpdateManyMutationInput = {
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pagamentosUncheckedUpdateManyInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cupom_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pagamento_detalhesCreateInput = {
    pagamento_detalhes_produto_id?: number | null
    pagamento_detalhes_quantidade: number
    pagamentos: pagamentosCreateNestedOneWithoutPagamento_detalhesInput
  }

  export type pagamento_detalhesUncheckedCreateInput = {
    pagamento_detalhes_id?: number
    pagamento_detalhes_produto_id?: number | null
    pagamento_detalhes_quantidade: number
    pagamentos_id: number
  }

  export type pagamento_detalhesUpdateInput = {
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUpdateOneRequiredWithoutPagamento_detalhesNestedInput
  }

  export type pagamento_detalhesUncheckedUpdateInput = {
    pagamento_detalhes_id?: IntFieldUpdateOperationsInput | number
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
    pagamentos_id?: IntFieldUpdateOperationsInput | number
  }

  export type pagamento_detalhesCreateManyInput = {
    pagamento_detalhes_id?: number
    pagamento_detalhes_produto_id?: number | null
    pagamento_detalhes_quantidade: number
    pagamentos_id: number
  }

  export type pagamento_detalhesUpdateManyMutationInput = {
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pagamento_detalhesUncheckedUpdateManyInput = {
    pagamento_detalhes_id?: IntFieldUpdateOperationsInput | number
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
    pagamentos_id?: IntFieldUpdateOperationsInput | number
  }

  export type cuponsCreateInput = {
    cupom_codigo: string
    cupom_desconto?: Decimal | DecimalJsLike | number | string
    cupom_status?: number
    pagamentos?: pagamentosCreateNestedManyWithoutCuponsInput
  }

  export type cuponsUncheckedCreateInput = {
    cupom_id?: number
    cupom_codigo: string
    cupom_desconto?: Decimal | DecimalJsLike | number | string
    cupom_status?: number
    pagamentos?: pagamentosUncheckedCreateNestedManyWithoutCuponsInput
  }

  export type cuponsUpdateInput = {
    cupom_codigo?: StringFieldUpdateOperationsInput | string
    cupom_desconto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUpdateManyWithoutCuponsNestedInput
  }

  export type cuponsUncheckedUpdateInput = {
    cupom_id?: IntFieldUpdateOperationsInput | number
    cupom_codigo?: StringFieldUpdateOperationsInput | string
    cupom_desconto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUncheckedUpdateManyWithoutCuponsNestedInput
  }

  export type cuponsCreateManyInput = {
    cupom_id?: number
    cupom_codigo: string
    cupom_desconto?: Decimal | DecimalJsLike | number | string
    cupom_status?: number
  }

  export type cuponsUpdateManyMutationInput = {
    cupom_codigo?: StringFieldUpdateOperationsInput | string
    cupom_desconto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFieldUpdateOperationsInput | number
  }

  export type cuponsUncheckedUpdateManyInput = {
    cupom_id?: IntFieldUpdateOperationsInput | number
    cupom_codigo?: StringFieldUpdateOperationsInput | string
    cupom_desconto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Pagamento_detalhesListRelationFilter = {
    every?: pagamento_detalhesWhereInput
    some?: pagamento_detalhesWhereInput
    none?: pagamento_detalhesWhereInput
  }

  export type CuponsNullableScalarRelationFilter = {
    is?: cuponsWhereInput | null
    isNot?: cuponsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pagamento_detalhesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pagamentosCountOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrder
    pagamentos_data?: SortOrder
    pagamentos_valor?: SortOrder
  }

  export type pagamentosAvgOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrder
    pagamentos_valor?: SortOrder
  }

  export type pagamentosMaxOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrder
    pagamentos_data?: SortOrder
    pagamentos_valor?: SortOrder
  }

  export type pagamentosMinOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrder
    pagamentos_data?: SortOrder
    pagamentos_valor?: SortOrder
  }

  export type pagamentosSumOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
    pedido_id?: SortOrder
    cupom_id?: SortOrder
    pagamentos_valor?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PagamentosScalarRelationFilter = {
    is?: pagamentosWhereInput
    isNot?: pagamentosWhereInput
  }

  export type pagamento_detalhesCountOrderByAggregateInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
  }

  export type pagamento_detalhesAvgOrderByAggregateInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
  }

  export type pagamento_detalhesMaxOrderByAggregateInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
  }

  export type pagamento_detalhesMinOrderByAggregateInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
  }

  export type pagamento_detalhesSumOrderByAggregateInput = {
    pagamento_detalhes_id?: SortOrder
    pagamento_detalhes_produto_id?: SortOrder
    pagamento_detalhes_quantidade?: SortOrder
    pagamentos_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PagamentosListRelationFilter = {
    every?: pagamentosWhereInput
    some?: pagamentosWhereInput
    none?: pagamentosWhereInput
  }

  export type pagamentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cuponsOrderByRelevanceInput = {
    fields: cuponsOrderByRelevanceFieldEnum | cuponsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cuponsCountOrderByAggregateInput = {
    cupom_id?: SortOrder
    cupom_codigo?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
  }

  export type cuponsAvgOrderByAggregateInput = {
    cupom_id?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
  }

  export type cuponsMaxOrderByAggregateInput = {
    cupom_id?: SortOrder
    cupom_codigo?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
  }

  export type cuponsMinOrderByAggregateInput = {
    cupom_id?: SortOrder
    cupom_codigo?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
  }

  export type cuponsSumOrderByAggregateInput = {
    cupom_id?: SortOrder
    cupom_desconto?: SortOrder
    cupom_status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type pagamento_detalhesCreateNestedManyWithoutPagamentosInput = {
    create?: XOR<pagamento_detalhesCreateWithoutPagamentosInput, pagamento_detalhesUncheckedCreateWithoutPagamentosInput> | pagamento_detalhesCreateWithoutPagamentosInput[] | pagamento_detalhesUncheckedCreateWithoutPagamentosInput[]
    connectOrCreate?: pagamento_detalhesCreateOrConnectWithoutPagamentosInput | pagamento_detalhesCreateOrConnectWithoutPagamentosInput[]
    createMany?: pagamento_detalhesCreateManyPagamentosInputEnvelope
    connect?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
  }

  export type cuponsCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<cuponsCreateWithoutPagamentosInput, cuponsUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: cuponsCreateOrConnectWithoutPagamentosInput
    connect?: cuponsWhereUniqueInput
  }

  export type pagamento_detalhesUncheckedCreateNestedManyWithoutPagamentosInput = {
    create?: XOR<pagamento_detalhesCreateWithoutPagamentosInput, pagamento_detalhesUncheckedCreateWithoutPagamentosInput> | pagamento_detalhesCreateWithoutPagamentosInput[] | pagamento_detalhesUncheckedCreateWithoutPagamentosInput[]
    connectOrCreate?: pagamento_detalhesCreateOrConnectWithoutPagamentosInput | pagamento_detalhesCreateOrConnectWithoutPagamentosInput[]
    createMany?: pagamento_detalhesCreateManyPagamentosInputEnvelope
    connect?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type pagamento_detalhesUpdateManyWithoutPagamentosNestedInput = {
    create?: XOR<pagamento_detalhesCreateWithoutPagamentosInput, pagamento_detalhesUncheckedCreateWithoutPagamentosInput> | pagamento_detalhesCreateWithoutPagamentosInput[] | pagamento_detalhesUncheckedCreateWithoutPagamentosInput[]
    connectOrCreate?: pagamento_detalhesCreateOrConnectWithoutPagamentosInput | pagamento_detalhesCreateOrConnectWithoutPagamentosInput[]
    upsert?: pagamento_detalhesUpsertWithWhereUniqueWithoutPagamentosInput | pagamento_detalhesUpsertWithWhereUniqueWithoutPagamentosInput[]
    createMany?: pagamento_detalhesCreateManyPagamentosInputEnvelope
    set?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    disconnect?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    delete?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    connect?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    update?: pagamento_detalhesUpdateWithWhereUniqueWithoutPagamentosInput | pagamento_detalhesUpdateWithWhereUniqueWithoutPagamentosInput[]
    updateMany?: pagamento_detalhesUpdateManyWithWhereWithoutPagamentosInput | pagamento_detalhesUpdateManyWithWhereWithoutPagamentosInput[]
    deleteMany?: pagamento_detalhesScalarWhereInput | pagamento_detalhesScalarWhereInput[]
  }

  export type cuponsUpdateOneWithoutPagamentosNestedInput = {
    create?: XOR<cuponsCreateWithoutPagamentosInput, cuponsUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: cuponsCreateOrConnectWithoutPagamentosInput
    upsert?: cuponsUpsertWithoutPagamentosInput
    disconnect?: cuponsWhereInput | boolean
    delete?: cuponsWhereInput | boolean
    connect?: cuponsWhereUniqueInput
    update?: XOR<XOR<cuponsUpdateToOneWithWhereWithoutPagamentosInput, cuponsUpdateWithoutPagamentosInput>, cuponsUncheckedUpdateWithoutPagamentosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pagamento_detalhesUncheckedUpdateManyWithoutPagamentosNestedInput = {
    create?: XOR<pagamento_detalhesCreateWithoutPagamentosInput, pagamento_detalhesUncheckedCreateWithoutPagamentosInput> | pagamento_detalhesCreateWithoutPagamentosInput[] | pagamento_detalhesUncheckedCreateWithoutPagamentosInput[]
    connectOrCreate?: pagamento_detalhesCreateOrConnectWithoutPagamentosInput | pagamento_detalhesCreateOrConnectWithoutPagamentosInput[]
    upsert?: pagamento_detalhesUpsertWithWhereUniqueWithoutPagamentosInput | pagamento_detalhesUpsertWithWhereUniqueWithoutPagamentosInput[]
    createMany?: pagamento_detalhesCreateManyPagamentosInputEnvelope
    set?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    disconnect?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    delete?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    connect?: pagamento_detalhesWhereUniqueInput | pagamento_detalhesWhereUniqueInput[]
    update?: pagamento_detalhesUpdateWithWhereUniqueWithoutPagamentosInput | pagamento_detalhesUpdateWithWhereUniqueWithoutPagamentosInput[]
    updateMany?: pagamento_detalhesUpdateManyWithWhereWithoutPagamentosInput | pagamento_detalhesUpdateManyWithWhereWithoutPagamentosInput[]
    deleteMany?: pagamento_detalhesScalarWhereInput | pagamento_detalhesScalarWhereInput[]
  }

  export type pagamentosCreateNestedOneWithoutPagamento_detalhesInput = {
    create?: XOR<pagamentosCreateWithoutPagamento_detalhesInput, pagamentosUncheckedCreateWithoutPagamento_detalhesInput>
    connectOrCreate?: pagamentosCreateOrConnectWithoutPagamento_detalhesInput
    connect?: pagamentosWhereUniqueInput
  }

  export type pagamentosUpdateOneRequiredWithoutPagamento_detalhesNestedInput = {
    create?: XOR<pagamentosCreateWithoutPagamento_detalhesInput, pagamentosUncheckedCreateWithoutPagamento_detalhesInput>
    connectOrCreate?: pagamentosCreateOrConnectWithoutPagamento_detalhesInput
    upsert?: pagamentosUpsertWithoutPagamento_detalhesInput
    connect?: pagamentosWhereUniqueInput
    update?: XOR<XOR<pagamentosUpdateToOneWithWhereWithoutPagamento_detalhesInput, pagamentosUpdateWithoutPagamento_detalhesInput>, pagamentosUncheckedUpdateWithoutPagamento_detalhesInput>
  }

  export type pagamentosCreateNestedManyWithoutCuponsInput = {
    create?: XOR<pagamentosCreateWithoutCuponsInput, pagamentosUncheckedCreateWithoutCuponsInput> | pagamentosCreateWithoutCuponsInput[] | pagamentosUncheckedCreateWithoutCuponsInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutCuponsInput | pagamentosCreateOrConnectWithoutCuponsInput[]
    createMany?: pagamentosCreateManyCuponsInputEnvelope
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
  }

  export type pagamentosUncheckedCreateNestedManyWithoutCuponsInput = {
    create?: XOR<pagamentosCreateWithoutCuponsInput, pagamentosUncheckedCreateWithoutCuponsInput> | pagamentosCreateWithoutCuponsInput[] | pagamentosUncheckedCreateWithoutCuponsInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutCuponsInput | pagamentosCreateOrConnectWithoutCuponsInput[]
    createMany?: pagamentosCreateManyCuponsInputEnvelope
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type pagamentosUpdateManyWithoutCuponsNestedInput = {
    create?: XOR<pagamentosCreateWithoutCuponsInput, pagamentosUncheckedCreateWithoutCuponsInput> | pagamentosCreateWithoutCuponsInput[] | pagamentosUncheckedCreateWithoutCuponsInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutCuponsInput | pagamentosCreateOrConnectWithoutCuponsInput[]
    upsert?: pagamentosUpsertWithWhereUniqueWithoutCuponsInput | pagamentosUpsertWithWhereUniqueWithoutCuponsInput[]
    createMany?: pagamentosCreateManyCuponsInputEnvelope
    set?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    disconnect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    delete?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    update?: pagamentosUpdateWithWhereUniqueWithoutCuponsInput | pagamentosUpdateWithWhereUniqueWithoutCuponsInput[]
    updateMany?: pagamentosUpdateManyWithWhereWithoutCuponsInput | pagamentosUpdateManyWithWhereWithoutCuponsInput[]
    deleteMany?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
  }

  export type pagamentosUncheckedUpdateManyWithoutCuponsNestedInput = {
    create?: XOR<pagamentosCreateWithoutCuponsInput, pagamentosUncheckedCreateWithoutCuponsInput> | pagamentosCreateWithoutCuponsInput[] | pagamentosUncheckedCreateWithoutCuponsInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutCuponsInput | pagamentosCreateOrConnectWithoutCuponsInput[]
    upsert?: pagamentosUpsertWithWhereUniqueWithoutCuponsInput | pagamentosUpsertWithWhereUniqueWithoutCuponsInput[]
    createMany?: pagamentosCreateManyCuponsInputEnvelope
    set?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    disconnect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    delete?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    update?: pagamentosUpdateWithWhereUniqueWithoutCuponsInput | pagamentosUpdateWithWhereUniqueWithoutCuponsInput[]
    updateMany?: pagamentosUpdateManyWithWhereWithoutCuponsInput | pagamentosUpdateManyWithWhereWithoutCuponsInput[]
    deleteMany?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type pagamento_detalhesCreateWithoutPagamentosInput = {
    pagamento_detalhes_produto_id?: number | null
    pagamento_detalhes_quantidade: number
  }

  export type pagamento_detalhesUncheckedCreateWithoutPagamentosInput = {
    pagamento_detalhes_id?: number
    pagamento_detalhes_produto_id?: number | null
    pagamento_detalhes_quantidade: number
  }

  export type pagamento_detalhesCreateOrConnectWithoutPagamentosInput = {
    where: pagamento_detalhesWhereUniqueInput
    create: XOR<pagamento_detalhesCreateWithoutPagamentosInput, pagamento_detalhesUncheckedCreateWithoutPagamentosInput>
  }

  export type pagamento_detalhesCreateManyPagamentosInputEnvelope = {
    data: pagamento_detalhesCreateManyPagamentosInput | pagamento_detalhesCreateManyPagamentosInput[]
    skipDuplicates?: boolean
  }

  export type cuponsCreateWithoutPagamentosInput = {
    cupom_codigo: string
    cupom_desconto?: Decimal | DecimalJsLike | number | string
    cupom_status?: number
  }

  export type cuponsUncheckedCreateWithoutPagamentosInput = {
    cupom_id?: number
    cupom_codigo: string
    cupom_desconto?: Decimal | DecimalJsLike | number | string
    cupom_status?: number
  }

  export type cuponsCreateOrConnectWithoutPagamentosInput = {
    where: cuponsWhereUniqueInput
    create: XOR<cuponsCreateWithoutPagamentosInput, cuponsUncheckedCreateWithoutPagamentosInput>
  }

  export type pagamento_detalhesUpsertWithWhereUniqueWithoutPagamentosInput = {
    where: pagamento_detalhesWhereUniqueInput
    update: XOR<pagamento_detalhesUpdateWithoutPagamentosInput, pagamento_detalhesUncheckedUpdateWithoutPagamentosInput>
    create: XOR<pagamento_detalhesCreateWithoutPagamentosInput, pagamento_detalhesUncheckedCreateWithoutPagamentosInput>
  }

  export type pagamento_detalhesUpdateWithWhereUniqueWithoutPagamentosInput = {
    where: pagamento_detalhesWhereUniqueInput
    data: XOR<pagamento_detalhesUpdateWithoutPagamentosInput, pagamento_detalhesUncheckedUpdateWithoutPagamentosInput>
  }

  export type pagamento_detalhesUpdateManyWithWhereWithoutPagamentosInput = {
    where: pagamento_detalhesScalarWhereInput
    data: XOR<pagamento_detalhesUpdateManyMutationInput, pagamento_detalhesUncheckedUpdateManyWithoutPagamentosInput>
  }

  export type pagamento_detalhesScalarWhereInput = {
    AND?: pagamento_detalhesScalarWhereInput | pagamento_detalhesScalarWhereInput[]
    OR?: pagamento_detalhesScalarWhereInput[]
    NOT?: pagamento_detalhesScalarWhereInput | pagamento_detalhesScalarWhereInput[]
    pagamento_detalhes_id?: IntFilter<"pagamento_detalhes"> | number
    pagamento_detalhes_produto_id?: IntNullableFilter<"pagamento_detalhes"> | number | null
    pagamento_detalhes_quantidade?: IntFilter<"pagamento_detalhes"> | number
    pagamentos_id?: IntFilter<"pagamento_detalhes"> | number
  }

  export type cuponsUpsertWithoutPagamentosInput = {
    update: XOR<cuponsUpdateWithoutPagamentosInput, cuponsUncheckedUpdateWithoutPagamentosInput>
    create: XOR<cuponsCreateWithoutPagamentosInput, cuponsUncheckedCreateWithoutPagamentosInput>
    where?: cuponsWhereInput
  }

  export type cuponsUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: cuponsWhereInput
    data: XOR<cuponsUpdateWithoutPagamentosInput, cuponsUncheckedUpdateWithoutPagamentosInput>
  }

  export type cuponsUpdateWithoutPagamentosInput = {
    cupom_codigo?: StringFieldUpdateOperationsInput | string
    cupom_desconto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFieldUpdateOperationsInput | number
  }

  export type cuponsUncheckedUpdateWithoutPagamentosInput = {
    cupom_id?: IntFieldUpdateOperationsInput | number
    cupom_codigo?: StringFieldUpdateOperationsInput | string
    cupom_desconto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cupom_status?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentosCreateWithoutPagamento_detalhesInput = {
    pagamento_status?: number
    pedido_id: number
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
    cupons?: cuponsCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentosUncheckedCreateWithoutPagamento_detalhesInput = {
    pagamento_id?: number
    pagamento_status?: number
    pedido_id: number
    cupom_id?: number | null
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
  }

  export type pagamentosCreateOrConnectWithoutPagamento_detalhesInput = {
    where: pagamentosWhereUniqueInput
    create: XOR<pagamentosCreateWithoutPagamento_detalhesInput, pagamentosUncheckedCreateWithoutPagamento_detalhesInput>
  }

  export type pagamentosUpsertWithoutPagamento_detalhesInput = {
    update: XOR<pagamentosUpdateWithoutPagamento_detalhesInput, pagamentosUncheckedUpdateWithoutPagamento_detalhesInput>
    create: XOR<pagamentosCreateWithoutPagamento_detalhesInput, pagamentosUncheckedCreateWithoutPagamento_detalhesInput>
    where?: pagamentosWhereInput
  }

  export type pagamentosUpdateToOneWithWhereWithoutPagamento_detalhesInput = {
    where?: pagamentosWhereInput
    data: XOR<pagamentosUpdateWithoutPagamento_detalhesInput, pagamentosUncheckedUpdateWithoutPagamento_detalhesInput>
  }

  export type pagamentosUpdateWithoutPagamento_detalhesInput = {
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cupons?: cuponsUpdateOneWithoutPagamentosNestedInput
  }

  export type pagamentosUncheckedUpdateWithoutPagamento_detalhesInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cupom_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pagamentosCreateWithoutCuponsInput = {
    pagamento_status?: number
    pedido_id: number
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesCreateNestedManyWithoutPagamentosInput
  }

  export type pagamentosUncheckedCreateWithoutCuponsInput = {
    pagamento_id?: number
    pagamento_status?: number
    pedido_id: number
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesUncheckedCreateNestedManyWithoutPagamentosInput
  }

  export type pagamentosCreateOrConnectWithoutCuponsInput = {
    where: pagamentosWhereUniqueInput
    create: XOR<pagamentosCreateWithoutCuponsInput, pagamentosUncheckedCreateWithoutCuponsInput>
  }

  export type pagamentosCreateManyCuponsInputEnvelope = {
    data: pagamentosCreateManyCuponsInput | pagamentosCreateManyCuponsInput[]
    skipDuplicates?: boolean
  }

  export type pagamentosUpsertWithWhereUniqueWithoutCuponsInput = {
    where: pagamentosWhereUniqueInput
    update: XOR<pagamentosUpdateWithoutCuponsInput, pagamentosUncheckedUpdateWithoutCuponsInput>
    create: XOR<pagamentosCreateWithoutCuponsInput, pagamentosUncheckedCreateWithoutCuponsInput>
  }

  export type pagamentosUpdateWithWhereUniqueWithoutCuponsInput = {
    where: pagamentosWhereUniqueInput
    data: XOR<pagamentosUpdateWithoutCuponsInput, pagamentosUncheckedUpdateWithoutCuponsInput>
  }

  export type pagamentosUpdateManyWithWhereWithoutCuponsInput = {
    where: pagamentosScalarWhereInput
    data: XOR<pagamentosUpdateManyMutationInput, pagamentosUncheckedUpdateManyWithoutCuponsInput>
  }

  export type pagamentosScalarWhereInput = {
    AND?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
    OR?: pagamentosScalarWhereInput[]
    NOT?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
    pagamento_id?: IntFilter<"pagamentos"> | number
    pagamento_status?: IntFilter<"pagamentos"> | number
    pedido_id?: IntFilter<"pagamentos"> | number
    cupom_id?: IntNullableFilter<"pagamentos"> | number | null
    pagamentos_data?: DateTimeFilter<"pagamentos"> | Date | string
    pagamentos_valor?: DecimalNullableFilter<"pagamentos"> | Decimal | DecimalJsLike | number | string | null
  }

  export type pagamento_detalhesCreateManyPagamentosInput = {
    pagamento_detalhes_id?: number
    pagamento_detalhes_produto_id?: number | null
    pagamento_detalhes_quantidade: number
  }

  export type pagamento_detalhesUpdateWithoutPagamentosInput = {
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pagamento_detalhesUncheckedUpdateWithoutPagamentosInput = {
    pagamento_detalhes_id?: IntFieldUpdateOperationsInput | number
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pagamento_detalhesUncheckedUpdateManyWithoutPagamentosInput = {
    pagamento_detalhes_id?: IntFieldUpdateOperationsInput | number
    pagamento_detalhes_produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento_detalhes_quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentosCreateManyCuponsInput = {
    pagamento_id?: number
    pagamento_status?: number
    pedido_id: number
    pagamentos_data: Date | string
    pagamentos_valor?: Decimal | DecimalJsLike | number | string | null
  }

  export type pagamentosUpdateWithoutCuponsInput = {
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesUpdateManyWithoutPagamentosNestedInput
  }

  export type pagamentosUncheckedUpdateWithoutCuponsInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pagamento_detalhes?: pagamento_detalhesUncheckedUpdateManyWithoutPagamentosNestedInput
  }

  export type pagamentosUncheckedUpdateManyWithoutCuponsInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    pagamentos_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos_valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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