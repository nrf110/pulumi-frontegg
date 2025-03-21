# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import sys
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
if sys.version_info >= (3, 11):
    from typing import NotRequired, TypedDict, TypeAlias
else:
    from typing_extensions import NotRequired, TypedDict, TypeAlias
from . import _utilities

__all__ = ['TenantArgs', 'Tenant']

@pulumi.input_type
class TenantArgs:
    def __init__(__self__, *,
                 key: pulumi.Input[str],
                 application_uri: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 selected_metadata: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None):
        """
        The set of arguments for constructing a Tenant resource.
        :param pulumi.Input[str] key: A human-readable identifier for the tenant.
        :param pulumi.Input[str] application_uri: The application URI for this tenant.
        :param pulumi.Input[str] name: A human-readable name for the tenant.
        """
        pulumi.set(__self__, "key", key)
        if application_uri is not None:
            pulumi.set(__self__, "application_uri", application_uri)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if selected_metadata is not None:
            pulumi.set(__self__, "selected_metadata", selected_metadata)

    @property
    @pulumi.getter
    def key(self) -> pulumi.Input[str]:
        """
        A human-readable identifier for the tenant.
        """
        return pulumi.get(self, "key")

    @key.setter
    def key(self, value: pulumi.Input[str]):
        pulumi.set(self, "key", value)

    @property
    @pulumi.getter(name="applicationUri")
    def application_uri(self) -> Optional[pulumi.Input[str]]:
        """
        The application URI for this tenant.
        """
        return pulumi.get(self, "application_uri")

    @application_uri.setter
    def application_uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "application_uri", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        A human-readable name for the tenant.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="selectedMetadata")
    def selected_metadata(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        return pulumi.get(self, "selected_metadata")

    @selected_metadata.setter
    def selected_metadata(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "selected_metadata", value)


@pulumi.input_type
class _TenantState:
    def __init__(__self__, *,
                 application_uri: Optional[pulumi.Input[str]] = None,
                 key: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 selected_metadata: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None):
        """
        Input properties used for looking up and filtering Tenant resources.
        :param pulumi.Input[str] application_uri: The application URI for this tenant.
        :param pulumi.Input[str] key: A human-readable identifier for the tenant.
        :param pulumi.Input[str] name: A human-readable name for the tenant.
        """
        if application_uri is not None:
            pulumi.set(__self__, "application_uri", application_uri)
        if key is not None:
            pulumi.set(__self__, "key", key)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if selected_metadata is not None:
            pulumi.set(__self__, "selected_metadata", selected_metadata)

    @property
    @pulumi.getter(name="applicationUri")
    def application_uri(self) -> Optional[pulumi.Input[str]]:
        """
        The application URI for this tenant.
        """
        return pulumi.get(self, "application_uri")

    @application_uri.setter
    def application_uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "application_uri", value)

    @property
    @pulumi.getter
    def key(self) -> Optional[pulumi.Input[str]]:
        """
        A human-readable identifier for the tenant.
        """
        return pulumi.get(self, "key")

    @key.setter
    def key(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "key", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        A human-readable name for the tenant.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="selectedMetadata")
    def selected_metadata(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        return pulumi.get(self, "selected_metadata")

    @selected_metadata.setter
    def selected_metadata(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "selected_metadata", value)


class Tenant(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 application_uri: Optional[pulumi.Input[str]] = None,
                 key: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 selected_metadata: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None):
        """
        Configures a Frontegg tenant.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_uri: The application URI for this tenant.
        :param pulumi.Input[str] key: A human-readable identifier for the tenant.
        :param pulumi.Input[str] name: A human-readable name for the tenant.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: TenantArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Configures a Frontegg tenant.

        :param str resource_name: The name of the resource.
        :param TenantArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(TenantArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 application_uri: Optional[pulumi.Input[str]] = None,
                 key: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 selected_metadata: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = TenantArgs.__new__(TenantArgs)

            __props__.__dict__["application_uri"] = application_uri
            if key is None and not opts.urn:
                raise TypeError("Missing required property 'key'")
            __props__.__dict__["key"] = key
            __props__.__dict__["name"] = name
            __props__.__dict__["selected_metadata"] = selected_metadata
        super(Tenant, __self__).__init__(
            'frontegg:index/tenant:Tenant',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            application_uri: Optional[pulumi.Input[str]] = None,
            key: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            selected_metadata: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None) -> 'Tenant':
        """
        Get an existing Tenant resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_uri: The application URI for this tenant.
        :param pulumi.Input[str] key: A human-readable identifier for the tenant.
        :param pulumi.Input[str] name: A human-readable name for the tenant.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _TenantState.__new__(_TenantState)

        __props__.__dict__["application_uri"] = application_uri
        __props__.__dict__["key"] = key
        __props__.__dict__["name"] = name
        __props__.__dict__["selected_metadata"] = selected_metadata
        return Tenant(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="applicationUri")
    def application_uri(self) -> pulumi.Output[Optional[str]]:
        """
        The application URI for this tenant.
        """
        return pulumi.get(self, "application_uri")

    @property
    @pulumi.getter
    def key(self) -> pulumi.Output[str]:
        """
        A human-readable identifier for the tenant.
        """
        return pulumi.get(self, "key")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        A human-readable name for the tenant.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="selectedMetadata")
    def selected_metadata(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        return pulumi.get(self, "selected_metadata")

