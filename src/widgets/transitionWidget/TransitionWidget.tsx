import Dropdown from '@/features/transition/ui/Dropdown';
import PageEnterExit from '@/features/transition/ui/PageEnterExit';
import Transition from '@/features/transition/ui/Transition';
import TransitionSlide from '@/features/transition/ui/TransitionSlide';

export default function TransitionWidget() {
    return (
        <div>
            <Transition />
            <TransitionSlide />
            <Dropdown />
            <PageEnterExit />
        </div>
    );
}
