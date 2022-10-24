import {GetStaticPaths, GetStaticProps} from "next";

export default function DemoPage({index}) {
    return <h1>Demo Page {index}</h1>
}

export const getStaticProps: GetStaticProps = ({params}) => {
    console.log(`Building demo page ${params.index}`);
    return ({
        props: {
            index: params.index
        }
    });
}

export const getStaticPaths: GetStaticPaths = () => ({
    paths: [],
    fallback: "blocking"
})
