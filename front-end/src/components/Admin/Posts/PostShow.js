import React from 'react';
import { DateField, FunctionField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import Image from 'react-bootstrap/Image';

const PostShow = () => {

    const ImageField = (props) => <FunctionField {...props}
        render={record =>
            <Image
                src={`http://localhost:3000/public/upload/posts/${record.pictures}`}
                style={{width: '200px', height: '200px'}}
            />
        }
    />

    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <ImageField />
                <ReferenceField source='users_id' reference='users'/>
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
            </SimpleShowLayout>
        </Show>
    )
};

export default PostShow;
