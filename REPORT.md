# REDUX

## FLUX 패턴

MVC모델에서, Model과 View가 늘어난다면 그 둘 객체들 사이에 생기는 오류 및 수정사항에 대한 유지보수가 상당히 힘들어집니다. 그러한 문제를 해결하기 위해 먼저 FLUX 라는 디자인 패턴이 만들어졌습니다.
이는, 어떠한 Action을 받았을 때, Dispatcher가 받은 Action들을 통제하여 Store에 있는 상태 데이터를 업데이트하고 바뀐 데이터에 대해 View로 Redering하게 됩니다.

## REDUX

####REDUX는 바로 이 FLUX 디자인 패턴을 좀 더 편하게 사용할수 있게 해주는 Library입니다.

#### 아래와 같이, store에서 모든 데이터를 담고 있고, 컴포넌트끼리는 직접 교류하지 않고 store 중간자를 통하여 교류합니다. 빨간 화살표는 dispatch 를 의미하며 store에 있는 데이터를 업데이트 하는것을 가르키고, 주황색 화살표는 subscribe를 의미하며, 해당 컴포넌트에서 store에 있는 특정 데이터의 변동을 주의하고있다가 변동이 있을시 바로 반영시키는것을 가르킵니다.

![Alt text](redux.png)