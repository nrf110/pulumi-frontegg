// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Inputs
{

    public sealed class WorkspacePasswordPolicyGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("allowPassphrases", required: true)]
        public Input<bool> AllowPassphrases { get; set; } = null!;

        /// <summary>
        /// The number of historical passwords to prevent users from reusing. Set to zero to disable.
        /// </summary>
        [Input("history", required: true)]
        public Input<int> History { get; set; } = null!;

        /// <summary>
        /// The maximum length of a password.
        /// </summary>
        [Input("maxLength", required: true)]
        public Input<int> MaxLength { get; set; } = null!;

        /// <summary>
        /// The minimum length of a password.
        /// </summary>
        [Input("minLength", required: true)]
        public Input<int> MinLength { get; set; } = null!;

        [Input("minPhraseLength", required: true)]
        public Input<int> MinPhraseLength { get; set; } = null!;

        /// <summary>
        /// The minimum number of strength tests the password must meet.
        /// </summary>
        [Input("minTests", required: true)]
        public Input<int> MinTests { get; set; } = null!;

        public WorkspacePasswordPolicyGetArgs()
        {
        }
        public static new WorkspacePasswordPolicyGetArgs Empty => new WorkspacePasswordPolicyGetArgs();
    }
}
