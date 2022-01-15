# Todo-app

- GraphQL, Apollo
- React

로컬로 apollo server 제작

CRA 프로젝트 생성 후 todo-app 제작

## GraphQL - Apollo

- Query
- Mutation


GraphQL은 명세, 형식일 구현할 솔루션이 필요함
GraphQL.js, GraphQL Yoga, AWS Amplify, Relay....

Apollo GraphQl은 프론트,백엔드 모두 제공하고 간편하고 쉽다.

### ApolloServer 만들기
```javascript
const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})
```
- typeDef
    - GraphQL 명세에서 사용될 데이터, 요청 타입 지정
    - gql(template literal tag)로 생성됨

- resolver
    - 서비스의 액션들을 함수로 지정
    - 요청에 따라 데이터를 반환, 입력, 수정, 삭뼈

### Query 구현
<br>
Query 루트 타입

- 자료요청에 사용될 쿼리들을 정의
- 쿼리 명령문마다 반환될 데이터 형태를 지정

```javascript
type Query {
    teams : [team]
}
```

Type

- 반환될 데이터의 형태를 지정
- 자료형을 가진 필드들로 구성
```javascript
    type Team {
        id: Int
        manager: String
        office: String
        extension_number: String
        mascot: String
        cleaning_duty: String
        project: String
    }
```

Resolver

- Query란 object의 항목들로 데이터를 반환하는 함수 선언
- 실제 프로젝트에서는 MySQL조회 코드 등..
```javascript
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}
```

Mutation

- 삭제, 추가, 수정 등을 처리할 수 있다
  <br/>
  <br/>


삭제
```javascript
type Mutation {
    deleteEquipment(id: String): Equipment
}

//resolver
Mutation: {
    deleteEquipment: (parent, args, context, info) => {
        //args에 쿼리 날릴때 인자로 들어온 값이 들어있음
        const deleted = database.equipments
            .filter((equipment) => {
                return equipment.id === args.id
            })[0]
        database.equipments = database.equipments
            .filter((equipment) => {
                return equipment.id !== args.id
            })
        return deleted
    }
}

//서버 요청
mutation {
    deleteEquipment(id: "notebook") {
        id
        used_by
        count
        new_or_used
    }
}
```

추가
```javascript
type Mutation {
    insertEquipment(
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
    ): Equipment
}

//resolver
Mutation: {
    insertEquipment: (parent, args, context, info) => {
        database.equipments.push(args)
        return args
    },
}

//서버 요청
mutation {
    insertEquipment (
        id: "laptop",
        used_by: "developer",
        count: 17,
        new_or_used: "new"
    ) {
        id
        used_by
        count
        new_or_used
    }
}
```

수정

```javascript
type Mutation {
    editEquipment(
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
    ): Equipment
}

//resolver
Mutation: {
    editEquipment: (parent, args, context, info) => {
        return database.equipments.filter((equipment) => {
            return equipment.id === args.id
        }).map((equipment) => {
            Object.assign(equipment, args)
            return equipment
        })[0]
    },
}

//서버 요청
mutation {
    editEquipment (
        id: "pen tablet",
        new_or_used: "new",
        count: 30,
        used_by: "designer"
) {
        id
        new_or_used
        count
        used_by
    }
}
```
