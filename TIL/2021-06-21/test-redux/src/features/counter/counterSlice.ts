import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// 아래의 기능을 thunk라고 하며 비동기 로직을 수행할 수 있습니다. 잇
// 일반 작업처럼 발송할 수 있습니다: 'dispatch(증분 Async(10))crckc' 이것
// 첫 번째 인수로 'think' 기능을 가진 thunk를 호출합니다. 비동기
// 그런 다음 코드를 실행하고 다른 작업을 디스패치할 수 있습니다. 땡땡이
// 일반적으로 비동기 요청을 만드는 데 사용됩니다.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // 반환되는 값이 '충족된' 작업 페이로드가 됩니다.
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // '리듀서' 필드를 사용하여 리듀서를 정의하고 관련 작업을 생성할 수 있습니다.
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Payload Action 유형을 사용하여 'action.payload'의 내용을 선언합니다.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // 'extraReducers' 필드를 사용하여 슬라이스가 다른 곳에서 정의된 작업을 처리할 수 있습니다.
  // AsyncThunk 또는 다른 슬라이스에서 생성된 작업을 포함합니다.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 아래의 기능을 셀렉터라고 하며, 값을 선택할 수 있습니다.
// 주. 선택기를 사용하는 대신 인라인으로 정의할 수도 있습니다.
// 조각 파일에서. 예를 들어 '선택기 사용(상태: RootState) => state.counter.value)'
export const selectCount = (state: RootState) => state.counter.value;

// 우리는 또한 손으로 thunk를 쓸 수 있는데, 이것은 동기 논리와 비동기 논리를 모두 포함할 수 있다.
// 다음은 현재 상태에 따라 조건부 배포 작업의 예입니다.

export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
