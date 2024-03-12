/*
Copyright 2022 Iguazio Systems Ltd.
Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.
In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/
export const uniquenessError = { name: 'uniqueness', label: 'Key must be unique' }

export const getInputWidthByValue = (value) => {
  let input = document.getElementById('chips-hidden-util-input')

  if (!input) {
    input = document.createElement('input')
    const styles = {
      position: 'absolute',
      left: '-10000px',
      top: "auto",
      width: '20px',
      visibility: 'hidden',
      'font-size': '14px'
    }

    for (const [key, value] of Object.entries(styles)) {
      input.style[key] = value;
    }

    input.id = 'chips-hidden-util-input'
    input.tabIndex  = -1
    document.body.append(input)
  }

  input.value = value

  return input.scrollWidth ?? 0
}
