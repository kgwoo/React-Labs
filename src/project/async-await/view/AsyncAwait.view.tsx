import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API, Memo } from "../model/API";

const AsyncAwaitView: React.FC = () => {
  const api = new API();
  const [memo, setMemo] = useState<Memo[]>();

  useEffect(() => {
    api.getMemoList().then(setMemo);
  }, []);

  async function createMemo() {
    await api.postMemo();
    const data = await api.getMemoList();
    setMemo(data);
  }

  const deleteMemo = (id: string) => {
    api.deleteMemo(id).then((res) => {
      const deletedMemoList = memo?.filter((m) => m.id !== res.id);
      setMemo(deletedMemoList);
    });
  };

  return (
    <div>
      <AddButtonLayout>
        <AddButton onClick={createMemo}>추가</AddButton>
      </AddButtonLayout>
      <ItemLayout>
        {memo?.map((m) => (
          <Item key={m.id}>
            <div>
              <Name>{m.name}</Name>
              <Title>{m.title}</Title>
            </div>
            <DeleteButton onClick={() => deleteMemo(m.id)}>삭제</DeleteButton>
          </Item>
        ))}
      </ItemLayout>
    </div>
  );
};

export default AsyncAwaitView;

const AddButtonLayout = styled.div`
  position: fixed;
  top: 0px;
  padding-top: 10px;
  background-color: #fff;
`;

const AddButton = styled.button`
  width: 200px;
  height: 48px;
`;

const ItemLayout = styled.div`
  padding-top: 40px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Name = styled.div``;

const Title = styled.div``;

const DeleteButton = styled.button``;
