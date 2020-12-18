/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    <img name="logo-url"
         width="180%"
         height="180%"
         src="https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1596657274/pern6ovrtyyg9wctavxz.png"
         alt="GopherCon logo image"
     />
  );
}
