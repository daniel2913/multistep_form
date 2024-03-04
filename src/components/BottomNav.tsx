import LinkButton from '../components/LinkButton';
import { error, page, pages } from '../state';
import { computed } from '@preact/signals'

const currentIdx = computed(() => pages.indexOf(page.value))

export function BottomNav(props: { className?: string; }) {
    const lockBack = currentIdx.value === 0;
    const lockForward = currentIdx.value === pages.length - 1 || error.value;
    if (page.value === "completed") return (
        <nav className={`absolute bottom-2 w-full ${props.className}`}>
            <div className="flex justify-between px-4">
                <LinkButton
                    className="bg-p-blue-purple text-n-alabaster px-4 py-2 rounded-md"
                    href="info"
                >
                    Start Over
                </LinkButton>
                <LinkButton
                    className="bg-p-blue-purple text-n-alabaster px-4 py-2 rounded-md"
                    href="https://danielzh.site"
                    native
                >
                    Exit
                </LinkButton>
            </div>
        </nav>
    );
    return (
        <nav className={`absolute bottom-2 w-full ${props.className}`}>
            <div className="flex justify-between px-4">
                {page.value === pages[0]
                    ? <div />
                    : <LinkButton
                        className={`${lockBack ? "bg-n-gray-light" : "bg-p-blue-purple"} text-n-alabaster px-4 py-2 rounded-md`}
                        disabled={lockBack}
                        href={error.value ? "info" : pages[currentIdx.value - 1]}
                    >
                        Back
                    </LinkButton>}
                {page.value === pages[pages.length - 1]
                    ?
                    <LinkButton
                        className={`${error.value ? "bg-n-gray-light" : "bg-p-blue-purple"} text-n-alabaster px-4 py-2 rounded-md`}
                        disabled={error.value}
                        href='completed'
                    >
                        Complete
                    </LinkButton>
                    :
                    <LinkButton
                        className={`${lockForward ? "bg-n-gray-light" : "bg-p-blue-purple"} text-n-alabaster px-4 py-2 rounded-md`}
                        disabled={lockForward}
                        href={pages[currentIdx.value + 1]}
                    >
                        Next
                    </LinkButton>}
            </div>
        </nav>
    );
}

