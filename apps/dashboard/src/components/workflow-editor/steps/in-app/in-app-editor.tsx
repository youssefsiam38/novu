import { RiPencilRuler2Line } from 'react-icons/ri';
import { UiSchemaGroupEnum, type UiSchema } from '@novu/shared';

import { getComponentByType } from '@/components/workflow-editor/steps/component-utils';

const avatarKey = 'avatar';
const subjectKey = 'subject';
const bodyKey = 'body';
const redirectKey = 'redirect';
const primaryActionKey = 'primaryAction';
const secondaryActionKey = 'secondaryAction';

export const InAppEditor = ({ uiSchema }: { uiSchema?: UiSchema }) => {
  if (!uiSchema || uiSchema?.group !== UiSchemaGroupEnum.IN_APP) {
    return null;
  }

  const {
    [avatarKey]: avatar,
    [subjectKey]: subject,
    [bodyKey]: body,
    [redirectKey]: redirect,
    [primaryActionKey]: primaryAction,
    [secondaryActionKey]: secondaryAction,
  } = uiSchema.properties ?? {};

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <RiPencilRuler2Line className="text-foreground-950 size-5 p-0.5 text-sm font-medium" />
        <span>In-app Template</span>
      </div>
      <div className="flex flex-col gap-1 rounded-xl border border-neutral-100 p-1">
        {(avatar || subject) && (
          <div className="flex gap-1">
            {avatar && getComponentByType({ component: avatar.component })}
            {subject && getComponentByType({ component: subject.component })}
          </div>
        )}
        {body && getComponentByType({ component: body.component })}
        {(primaryAction || secondaryAction) &&
          getComponentByType({
            component: primaryAction.component || secondaryAction.component,
          })}
      </div>
      {redirect &&
        getComponentByType({
          component: redirect.component,
        })}
    </div>
  );
};
