import {RemoteSelector} from './RemoteSelector'
import {faker} from '@faker-js/faker';
import {useState} from "react";
import clsx from 'clsx'

faker.seed(0);


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/RemoteSelector',
  component: Wrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    getRemoteOptions: testSearch,
    renderInput(props) {
      return <input className='border rounded outline-none px-2 py-1 text-gray-700' {...props}
                    type={undefined} />
    },
    renderList(props) {
      return <ul {...props} />
    },
    renderListItem(props) {
      return <li onClick={props.onClick} className={clsx(props.selected && 'bg-gray-200')}
                 key={props.item}>{props.item}</li>
    },
    renderEmpty() {
      return 'Empty result'
    },
    renderLoading() {
      return 'Loading options...'
    },
    renderError(error) {
      return `Error: ${error}`
    }
  },
};

function Wrapper(props) {
  const [value, setValue] = useState(undefined)

  return (
    <div>
      <div>
        Value: {value ?? 'N/A'}
      </div>

      <RemoteSelector
        {...props}
        onSelect={setValue}
        value={[value]}
      />
    </div>
  )
}

const testNames = Array(100).fill(0).map(() => faker.person.fullName());

function testSearch(text) {
  let i
  const promise = new Promise((resolve, reject) => {
    i = setTimeout(() => {
      resolve(testNames.filter(name => name.indexOf(text) !== -1));
    }, faker.number.int({min: 1500, max: 3000}))
  })

  promise.cancel = () => clearTimeout(i);
  return promise
}
