import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from "./state/store";
import { decrement, increment, incrementByAmount,incrementAsync,decrementAsync } from "./state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const err = useSelector((state: RootState) => state.counter.error);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <Container className="mt-5">
            <Card className="col-4">
                <Card.Body>
                    <h1>Count</h1>
                    <hr />
                    <h1>{count}</h1>
                    {err && <p>{err}</p>}
                    <hr />
                    <ButtonGroup>
                        <Button onClick={() => dispatch(increment())}>Add</Button>
                        <Button onClick={() => dispatch(incrementByAmount(5))}>Add 5</Button>
                        <Button onClick={() => dispatch(incrementAsync(10))}>Add 10 async</Button>
                        <Button onClick={() => dispatch(decrement())}>Deduct</Button>
                        <Button onClick={() => dispatch(decrementAsync(15))}>Add 10 async</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Counter;